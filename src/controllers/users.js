import { Pre_User } from "../models/users/pre_user.js";
import { User } from "../models/users/user.js";
import { schoolCheck } from "../checks/user_auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// duplication checks
export const pre_register_post = async (req, res) => {
  const { email, password } = req.body;
  // checks if user_university allowed
  if (schoolCheck(email) == false) {
    return res.json({
      msg: "Invalid Email! Please Use Your University Email.",
      success: false,
    });
  }
  // checks if user_email already in user_database
  const users = await User.findOne({ where: { email: email } });
  // if user_email already in user_database: reject request
  if (users !== null) {
    return res.json({
      msg: "You Have Registered Already!",
      success: false,
    });
  }
  // checks if user_email already in pre_user_database
  const pre_user = await Pre_User.findOne({ where: { email: email } });
  // generate user_otp; salt and hash user_password
  const user_otp = Math.floor(Math.random() * 999999);
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  // if user_email PRESENT in pre_user_database: update pre_user
  if (pre_user !== null) {
    try {
      pre_user.set({ password: hashPassword, otp: user_otp });
      await pre_user.save();
      // cookies for user_auth data
      return res
        .cookie("email", email, { httpOnly: true }) // secure: true
        .cookie("password", hashPassword, { httpOnly: true }) // secure: true
        .cookie("otp", user_otp, { httpOnly: true }) // secure: true
        .json({
          msg: null,
          success: true,
        });
    } catch (error) {
      console.log(error);
      return res.json({
        msg: "Something Went Wrong! Please Try Again!",
        success: false,
      });
    }
  }
  // if user_email NOT in pre_user_database: create pre_user
  else {
    try {
      await Pre_User.create({
        email: email,
        password: hashPassword,
        otp: user_otp,
      });
      // send_OTP (email, user_otp)
      // cookies for user_auth data
      return res
        .cookie("email", email, { httpOnly: true }) // secure: true
        .cookie("password", hashPassword, { httpOnly: true }) // secure: true
        .cookie("otp", user_otp, { httpOnly: true }) // secure: true
        .json({
          msg: null,
          success: true,
        });
    } catch (error) {
      console.log(error);
      return res.json({
        msg: "Something Went Wrong! Please Try Again!",
        success: false,
      });
    }
  }
};

// authenticity verification
export const verify_otp_post = async (req, res) => {
  const { email, otp } = req.cookies;
  // otp verification: if accepted: JSON.success
  if (parseInt(req.body.otp) == otp) {
    return res.json({ msg: null, success: true });
  } else {
    return res.json({ msg: "Invalid OTP!", success: false });
  }
};

// TODO: async send_OTP (email, user_otp)

export const resend_otp = async (req, res) => {
  const { email, otp } = req.cookies;
  // if (email && otp) => await send_OTP (email, user_otp)
  return;
};

// create end_user
export const register_post = async (req, res) => {
  const { name, age, gender, interest, school, batch, bio } = req.body;
  const { email, password } = req.cookies;
  try {
    // create authentication tokens: user_email encoded
    const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1800s",
    });
    const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "15d",
    });
    await User.create({
      name: name,
      email: email,
      password: password,
      age: age,
      gender: gender,
      interest: interest,
      school: school,
      batch: batch,
      bio: bio,
      refresh_token: refreshToken,
    });
    // clear user_auth and auth_flow cookies
    ["email", "password", "otp"].forEach((cookie) => {
      res.clearCookie(String(cookie));
    });
    return res
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        // secure: true
      })
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 30 * 60 * 1000,
        // secure: true
      })
      .json({ msg: null, success: true });
  } catch (error) {
    console.log(error);
    return res.json({
      msg: "Something Went Wrong! Please Try Again!",
      success: false,
    });
  }
};

// user_login authentication
export const login_post = async (req, res) => {
  try {
    const { email, password } = req.body;
    // gets user from database
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    // user_password authentication
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ msg: "Wrong Password", success: false });
    // if user_password true: create authentication tokens: user_email encoded
    const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1800s",
    });
    const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "15d",
    });
    // updates refresh_token in database
    user.set({ refresh_token: refreshToken });
    await user.save();
    return res
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        // secure: true
      })
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 30 * 60 * 1000,
        // secure: true
      })
      .json({ msg: null, success: true });
  } catch (error) {
    return res.json({
      msg: "Email Not Found! Please Register First!",
      success: false,
    });
  }
};
