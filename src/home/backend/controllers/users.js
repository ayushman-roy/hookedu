import { User, Pre_User } from "../models/userModel.js";
import { schoolCheck } from "./checks";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import otp from "otp-generator";

var otp_config = {
  upperCaseAlphabets: false,
  lowerCaseAlphabets: false,
  specialChars: false,
};

export const pre_register_get = async (req, res) => {
  // TODO: convert to react
  res.sendFile("../../frontend-test/register/start.html");
};

export const pre_register_post = async (req, res) => {
  // MAYBE: change to req.body.[value]
  const { email, password } = req.body;
  if (schoolCheck(email) == false)
    return res
      .status(400)
      .json({ msg: "Invalid Email! Please Use Your University Email." });
  const users = await User.findOne({ where: { email: email } });
  if (users != null)
    // TODO: redirect to login page
    return res
      .json({ msg: "You Have Registered Already!" })
      .redirect(400, "back");
  const pre_user = await Pre_User.findOne({ where: { email: email } });
  const user_otp = otp.generate(6, otp_config);
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  if (pre_user != null) {
    try {
      pre_user.password = hashPassword;
      pre_user.otp = user_otp;
      await pre_user.save();
      // TODO: send OTP and redirect to OTP verify (register/verify)
      return res.json();
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
    // TODO: send OTP and redirect to OTP verify (register/verify)
    return res.json();
  } catch (error) {
    console.log(error);
    res
      .redirect(500, "back")
      .json({ msg: "Something Went Wrong! Please Try Again!" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: ["email"] });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const {
    name,
    email,
    password,
    confPassword,
    age,
    gender,
    interest,
    school,
    batch,
    bio,
  } = req.body;
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password and Confirm Password Do Not Match!" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await User.create({
      name: name,
      email: email,
      password: hashPassword,
      age: age,
      gender: gender,
      interest: interest,
      school: school,
      batch: batch,
      bio: bio,
    });
    res.json({ msg: "Registration Successful!" });
  } catch (error) {
    console.log(error);
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
