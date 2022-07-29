import { Pre_User } from "../models/users/pre_user.js";
import { User } from "../models/users/user.js";
import { schoolCheck } from "../checks/user_auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// pre_register form [register A]
export const pre_register_get = async (req, res) => {
  return res.sendFile(
    "/Users/ayushmanroy/hookedu/frontend-test/users/pre_register.html"
  );
};

// duplication checks
export const pre_register_post = async (req, res) => {
  const { email, password } = req.body;
  // checks if user_university allowed
  if (schoolCheck(email) == false) {
    return res.json({
      msg: "Invalid Email! Please Use Your University Email.",
      redirect: null,
      reload: true,
    });
  }
  // checks if user_email already in user_database
  const users = await User.findOne({ where: { email: email } });
  // if user_email already in user_database: reject request
  if (users !== null) {
    return res.json({
      msg: "You Have Registered Already!",
      redirect: "/",
      reload: false,
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
      // cookies for user_auth and auth_flow permissions
      return res
        .cookie("email", email, { httpOnly: true }) // secure: true
        .cookie("password", hashPassword, { httpOnly: true }) // secure: true
        .cookie("otp", user_otp, { httpOnly: true }) // secure: true
        .cookie("auth_otp", true, { httpOnly: true })
        .json({
          msg: null,
          redirect: "/hook/check",
          reload: false,
        });
    } catch (error) {
      console.log(error);
      return res.json({
        msg: "Something Went Wrong! Please Try Again!",
        redirect: null,
        reload: true,
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
      // TODO: send_OTP (email, user_otp)
      // cookies for user_auth and auth_flow permissions
      return res
        .cookie("email", email, { httpOnly: true }) // secure: true
        .cookie("password", hashPassword, { httpOnly: true }) // secure: true
        .cookie("otp", user_otp, { httpOnly: true }) // secure: true
        .cookie("auth_otp", true)
        .json({
          msg: null,
          redirect: "/hook/check",
          reload: false,
        });
    } catch (error) {
      console.log(error);
      return res.json({
        msg: "Something Went Wrong! Please Try Again!",
        redirect: null,
        reload: true,
      });
    }
  }
};

// verify_otp form [register B]
export const verify_otp_get = async (req, res) => {
  // checks if register form A accepted
  if (req.cookies.auth_otp == "true") {
    return res.sendFile(
      "/Users/ayushmanroy/hookedu/frontend-test/users/verify_otp.html"
    );
  } else {
    // HTTP status code: 401
    return res.redirect("/hook");
  }
};

// authenticity verification
export const verify_otp_post = async (req, res) => {
  // gets email and otp cookies from client
  const { email, otp } = req.cookies;
  // otp verification: if accepted: send auth_flow cookie
  if (parseInt(req.body.otp) == otp) {
    return res.cookie("auth_data", true).redirect("/hook/data");
  } else {
    req.flash("message", "Invalid OTP!");
    // HTTP status code: 400
    return res.redirect("back");
  }
};

// register form [register C]
export const register_get = async (req, res) => {
  // checks if register form A and B accepted
  if (req.cookies.auth_data == "true") {
    return res.sendFile(
      "/Users/ayushmanroy/hookedu/frontend-test/users/register.html"
    );
  } else {
    // HTTP status code: 401
    return res.redirect("/hook/check");
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
    req.flash("message", "Registration Successful!");
    // clear user_auth and auth_flow cookies
    ["auth_otp", "auth_data", "email", "password", "otp"].forEach((cookie) => {
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
      .redirect("/feed");
  } catch (error) {
    console.log(error);
    req.flash("message", "Something Went Wrong! Please Try Again!");
    // HTTP status code: 500
    return res.redirect("back");
  }
};

// user_login form
export const login_get = async (req, res) => {
  return res.sendFile(
    "/Users/ayushmanroy/hookedu/frontend-test/users/login.html"
  );
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
    if (!match) {
      req.flash("message", "Wrong Password!");
      // HTTP status code: 400
      return res.redirect("back");
    }
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
      .redirect("/feed");
  } catch (error) {
    req.flash("message", "Email Not Found! Please Register First!");
    // HTTP status code: 400
    return res.redirect("/hook");
  }
};

// TODO: resend_otp controller: GET /resend_otp and uses sendOTP() function
