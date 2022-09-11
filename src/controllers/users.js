import { Pre_User } from "../models/users/pre_user.js";
import { User } from "../models/users/user.js";
import { schoolCheck } from "../checks/user_auth.js";
import { send_otp } from "../checks/send_otp.js";
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
      send_otp(email, user_otp);
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
      send_otp(email, user_otp);
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
    return res
      .cookie("otp_verified", true, { httpOnly: true })
      .json({ msg: null, success: true });
  } else {
    return res.json({ msg: "Invalid OTP!", success: false });
  }
};

export const resend_otp = async (req, res) => {
  try {
    const { email, otp } = req.cookies;
    if (!Boolean(email && otp)) {
      throw error;
    }
    let otp_success = await send_otp(email, otp);
    if (otp_success) {
      return res.json({ msg: "Check Your Inbox for OTP!" });
    } else {
      throw error;
    }
  } catch (error) {
    return res.json({ msg: "Cannot Send OTP!" });
  }
};

// create end_user
export const register_post = async (req, res) => {
  const { name, age, gender, school, batch, bio } = req.body;
  const { email, password, otp_verified } = req.cookies;
  if (otp_verified) {
    try {
      // create authentication tokens: user_email encoded
      const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1800s",
      });
      const refreshToken = jwt.sign(
        { email },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "15d",
        }
      );
      await User.create({
        name: name,
        email: email,
        password: password,
        age: age,
        gender: gender,
        school: school,
        batch: batch,
        bio: bio,
        refresh_token: refreshToken,
      });
      // clear user_auth and auth_flow cookies
      ["email", "password", "otp", "otp_verified"].forEach((cookie) => {
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
        .json({ msg: null, success: true, otp_verify: true });
    } catch (error) {
      console.log(error);
      return res.json({
        msg: "Something Went Wrong! Please Try Again!",
        success: false,
        otp_verify: true,
      });
    }
  } else {
    res.json({ msg: "Please Verify OTP!", success: false, otp_verify: false });
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

export const user_update_get = async (req, res) => {
  try {
    const current_user = await User.findOne({ where: { email: req.user } });
    if (current_user) {
      return res.json({
        msg: null,
        success: true,
        user: {
          name: current_user.name,
          age: current_user.age,
          gender: current_user.gender,
          school: current_user.school,
          batch: current_user.batch,
          bio: current_user.bio,
          type: current_user.type,
          image_url: current_user.image_url,
        },
      });
    } else {
      return res.json({
        msg: "User Not Found! Please Login or Register First!",
        success: false,
        user: {},
      });
    }
  } catch (error) {
    return res.json({
      msg: "Something Went Wrong. Please Try Again!",
      success: false,
      user: {},
    });
  }
};

export const user_update_post = async (req, res) => {
  try {
    // only allow change of photo, gender & bio for now
    const { name, age, gender, school, batch, bio, type } = req.body;
    const current_user = await User.findOne({ where: { email: req.user } });
    if (current_user) {
      switch (true) {
        case current_user.name != name:
          current_user.set({ name: name });
        case current_user.age != age:
          current_user.set({ age: age });
        case current_user.gender != gender:
          current_user.set({ gender: gender });
        case current_user.school != school:
          current_user.set({ school: school });
        case current_user.batch != batch:
          current_user.set({ batch: batch });
        case current_user.bio != bio:
          current_user.set({ bio: bio });
        case current_user.type != type:
          current_user.set({ type: type });
        default:
          break;
      }
      if (current_user.changed()) {
        await current_user.save();
        return res.json({
          msg: "User Successfully Updated!",
          success: true,
        });
      } else {
        return res.json({
          msg: "No Changes Made. Please Make Changes Before Updating Profile!",
          success: false,
        });
      }
    } else {
      return res.json({
        msg: "User Not Found! Please Login or Register First!",
        success: false,
      });
    }
  } catch (error) {
    return res.json({
      msg: "Something Went Wrong. Please Try Again!",
      success: false,
    });
  }
};

// TODO: forgot password controller
// get user_email > check DB > send OTP > verify
