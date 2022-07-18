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
        .cookie("email", email)
        .cookie("password", hashPassword)
        .cookie("otp", user_otp)
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
        .cookie("email", email)
        .cookie("password", hashPassword)
        .cookie("otp", user_otp)
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
  res.sendFile(
    "/Users/ayushmanroy/hookedu/src/home/frontend-test/register/verify.html"
  );
};

export const verify_otp_post = async (req, res) => {
  const { email, otp } = req.cookies;
  // TODO: send_OTP(send_email, otp)
  const user_otp = req.body.otp;
  if (user_otp == otp) {
    res.redirect("next");
  } else {
    res.redirect(400, "back").json({ msg: "Invalid OTP!" });
  }
};

export const register_get = async (req, res) => {
  res.sendFile(
    "/Users/ayushmanroy/hookedu/src/home/frontend-test/register/data.html"
  );
};

export const register_post = async (req, res) => {
  const { name, age, gender, interest, school, batch, bio } = req.body;
  const { email, password } = req.cookies;
  try {
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
    });
    res.json({ msg: "Registration Successful!" }).redirect("hard-login");
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
      expiresIn: "30s",
    });
    const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    user.set({ refresh_token: refreshToken });
    await user.save();
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
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
