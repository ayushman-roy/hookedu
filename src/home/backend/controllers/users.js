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
  res.sendFile("/Users/ayushmanroy/hookedu/src/home/frontend-test/register/start.html");
};

export const pre_register_post = async (req, res) => {
  const { email, password } = req.body;
  if (schoolCheck(email) == false)
    return res
      .status(400)
      .json({ msg: "Invalid Email! Please Use Your University Email." });
  const users = await User.findOne({ where: { email: email } });
  if (users != null)
    return res
      .json({ msg: "You Have Registered Already!" })
      .redirect(400, "login");
  const pre_user = await Pre_User.findOne({ where: { email: email } });
  const user_otp = otp.generate(6, otp_config);
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  if (pre_user != null) {
    try {
      pre_user.password = hashPassword;
      pre_user.otp = user_otp;
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
  }
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
};

export const verify_otp_get = async (req, res) => {
  res.sendFile("../../frontend-test/register/verify.html");
};

export const verify_otp_post = async (req, res) => {
  const { email, otp } = req.cookies;
  // TODO: send_OTP(send_email, otp)
  const user_otp = req.body.otp;
  if (user_otp == otp) {
    res.redirect("next");
  }
  res.redirect(400, "back").json({ msg: "Invalid OTP!" });
};

export const register_get = async (req, res) => {
  res.sendFile("../../frontend-test/register/data.html");
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
    res.redirect("hard-login").json({ msg: "Registration Successful!" });
  } catch (error) {
    console.log(error);
    res
      .redirect(500, "back")
      .json({ msg: "Something Went Wrong! Please Try Again!" });
  }
};

export const Login = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Wrong Password!" });
    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await User.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email Not Found! Please Register First!" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await User.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await User.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
