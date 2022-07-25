import { Pre_User } from "../models/users/pre_user.js";
import { User } from "../models/users/user.js";
import { schoolCheck } from "../checks/user_auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// pre_register form [register A]
export const pre_register_get = async (req, res) => {
  res.sendFile(
    "/Users/ayushmanroy/hookedu/frontend-test/users/pre_register.html"
  );
};

// duplication checks
export const pre_register_post = async (req, res) => {
  const { email, password } = req.body;
  // checks if user_university allowed
  if (schoolCheck(email) == false)
    return res
      .json({ msg: "Invalid Email! Please Use Your University Email." })
      .redirect(403, "back");
  // checks if user_email already in user_database
  const users = await User.findOne({ where: { email: email } });
  // if user_email already in user_database: reject request
  if (users !== null)
    return res.json({ msg: "You Have Registered Already!" }).redirect(400, "/");
  // checks if user_email already in pre_user_database
  const pre_user = await Pre_User.findOne({ where: { email: email } });
  // generate user_otp; salt and hash user_password
  const user_otp = getRandomInt(999999);
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  // if user_email PRESENT in pre_user_database: update pre_user
  if (pre_user !== null) {
    try {
      pre_user.set({ password: hashPassword, otp: user_otp });
      await pre_user.save();
      // cookies for user_auth and auth_flow permissions
      res
        .cookie("email", email, { httpOnly: true, secure: true })
        .cookie("password", hashPassword, { httpOnly: true, secure: true })
        .cookie("otp", user_otp, { httpOnly: true, secure: true })
        .cookie("auth_otp", true, { httpOnly: true })
        .redirect("/hook/check");
    } catch (error) {
      console.log(error);
      res
        .json({ msg: "Something Went Wrong! Please Try Again!" })
        .redirect(500, "back");
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
      // cookies for user_auth and auth_flow permissions
      res
        .cookie("email", email, { httpOnly: true, secure: true })
        .cookie("password", hashPassword, { httpOnly: true, secure: true })
        .cookie("otp", user_otp, { httpOnly: true, secure: true })
        .cookie("auth_otp", true, { httpOnly: true })
        .redirect("/hook/check");
    } catch (error) {
      console.log(error);
      res
        .json({ msg: "Something Went Wrong! Please Try Again!" })
        .redirect(500, "back");
    }
  }
};

// verify_otp form [register B]
export const verify_otp_get = async (req, res) => {
  // checks if register form A accepted
  if (req.cookies.auth_otp == true) {
    res.sendFile(
      "/Users/ayushmanroy/hookedu/frontend-test/users/verify_otp.html"
    );
  } else {
    res.redirect(401, "/hook");
  }
};

// authenticity verification
export const verify_otp_post = async (req, res) => {
  // gets user_email and otp cookies from client
  const { email, otp } = req.cookies;
  // sends otp to user_email
  // TODO: send_OTP (user_email, otp)
  const user_otp = req.body.otp;
  // otp verification: if accepted: send auth_flow cookie
  if (user_otp == otp) {
    res.cookie("auth_data", true, { httpOnly: true }).redirect("/hook/data");
  } else {
    res.redirect(400, "back").json({ msg: "Invalid OTP!" });
  }
};

// register form [register C]
export const register_get = async (req, res) => {
  // checks if register form A and B accepted
  if (req.cookies.auth_data == true) {
    res.sendFile(
      "/Users/ayushmanroy/hookedu/frontend-test/users/register.html"
    );
  } else {
    res.redirect(401, "/hook/check");
  }
};

// user genesis
export const register_post = async (req, res) => {
  const { name, age, gender, interest, school, batch, bio } = req.body;
  const { email, password } = req.cookies;
  try {
    // create and send access and refresh tokens: user_email encoded
    const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1800s",
    });
    const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "15d",
    });
    // create user database_row
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
    res
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        secure: true,
      })
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 30 * 60 * 1000,
        secure: true,
      })
      // clear auth_flow cookies
      .clearCookie("auth_otp")
      .clearCookie("auth_data")
      .json({ msg: "Registration Successful!" })
      .redirect("/feed");
  } catch (error) {
    console.log(error);
    res
      .json({ msg: "Something Went Wrong! Please Try Again!" })
      .redirect(500, "back");
  }
};

// user_login form
export const login_get = async (req, res) => {
  res.sendFile("/Users/ayushmanroy/hookedu/frontend-test/users/login.html");
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
    if (!match)
      return res.json({ msg: "Wrong Password!" }).redirect(400, "back");
    // if user_password accepted:
    // create and send access and refresh tokens: user_email encoded
    const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1800s",
    });
    const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "15d",
    });
    // updates refresh_token in database
    user.set({ refresh_token: refreshToken });
    await user.save();
    res
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        secure: true,
      })
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 30 * 60 * 1000,
        secure: true,
      })
      .redirect("/feed");
  } catch (error) {
    res
      .json({ msg: "Email Not Found! Please Register First!" })
      .redirect(400, "/hook");
  }
};
