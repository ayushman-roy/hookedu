import { User, Pre_User } from "../models/userModels.js";
import { schoolCheck } from "./checks.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import otp from "otp-generator";

var otp_config = {
  upperCaseAlphabets: false,
  lowerCaseAlphabets: false,
  specialChars: false,
};

export const pre_register_get = async (req, res) => {
  res.sendFile(
    "/Users/ayushmanroy/hookedu/src/home/frontend-test/register/start.html"
  );
};

export const pre_register_post = async (req, res) => {
  const { email, password } = req.body;
  if (schoolCheck(email) == false)
    return res
      .status(400)
      .json({ msg: "Invalid Email! Please Use Your University Email." });
  const users = await User.findOne({ where: { email: email } });
  if (users !== null)
    return res
      .json({ msg: "You Have Registered Already!" })
      .redirect(400, "login");
  const pre_user = await Pre_User.findOne({ where: { email: email } });
  const user_otp = otp.generate(6, otp_config);
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  if (pre_user !== null) {
    try {
      pre_user.set({ password: hashPassword, otp: user_otp });
      await pre_user.save();
      res
        .cookie("email", email, { httpOnly: true, secure: true })
        .cookie("password", hashPassword, { httpOnly: true, secure: true })
        .cookie("otp", user_otp, { httpOnly: true, secure: true })
        .cookie("auth_otp", true, { httpOnly: true })
        .redirect("next");
    } catch (error) {
      console.log(error);
      res
        .redirect(500, "back")
        .json({ msg: "Something Went Wrong! Please Try Again!" });
    }
  } else {
    try {
      await Pre_User.create({
        email: email,
        password: hashPassword,
        otp: user_otp,
      });
      res
        .cookie("email", email, { httpOnly: true, secure: true })
        .cookie("password", hashPassword, { httpOnly: true, secure: true })
        .cookie("otp", user_otp, { httpOnly: true, secure: true })
        .cookie("auth_otp", true, { httpOnly: true })
        .redirect("next");
    } catch (error) {
      console.log(error);
      res
        .redirect(500, "back")
        .json({ msg: "Something Went Wrong! Please Try Again!" });
    }
  }
};

export const verify_otp_get = async (req, res) => {
  if (req.cookies.auth_otp == true) {
    res.sendFile(
      "/Users/ayushmanroy/hookedu/src/home/frontend-test/register/verify.html"
    );
  } else {
    res.redirect(401, "pre-register");
  }
};

export const verify_otp_post = async (req, res) => {
  const { email, otp } = req.cookies;
  // TODO: send_OTP(email, otp)
  const user_otp = req.body.otp;
  if (user_otp == otp) {
    res.cookie("auth_data", true, { httpOnly: true }).redirect("next");
  } else {
    res.redirect(400, "back").json({ msg: "Invalid OTP!" });
  }
};

export const register_get = async (req, res) => {
  if (req.cookies.auth_data == true) {
    res.sendFile(
      "/Users/ayushmanroy/hookedu/src/home/frontend-test/register/data.html"
    );
  } else {
    res.redirect(401, "otp-verify");
  }
};

export const register_post = async (req, res) => {
  const { name, age, gender, interest, school, batch, bio } = req.body;
  const { email, password } = req.cookies;
  try {
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
      .clearCookie("auth_otp")
      .clearCookie("auth_data")
      .json({ msg: "Registration Successful!" })
      .redirect("console");
  } catch (error) {
    console.log(error);
    res
      .json({ msg: "Something Went Wrong! Please Try Again!" })
      .redirect(500, "back");
  }
};

export const login_get = async (req, res) => {
  res.sendFile(
    "/Users/ayushmanroy/hookedu/src/home/frontend-test/login/main.html"
  );
};

export const login_post = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ msg: "Wrong Password!" });
    const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1800s",
    });
    const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "15d",
    });
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
      .redirect("console");
  } catch (error) {
    res
      .json({ msg: "Email Not Found! Please Register First!" })
      .redirect(404, "register");
  }
};

export const home_get = async (req, res) => {
  res.sendFile(
    "/Users/ayushmanroy/hookedu/src/home/frontend-test/home/main.html"
  );
};
