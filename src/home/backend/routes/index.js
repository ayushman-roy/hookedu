import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const home = express.Router();

home.get("/console", verifyToken, getUsers);
home.post("/register", Register);
home.get("/refreshtokenlogin", refreshToken);
home.post("/login", Login);
home.delete("/logout", Logout);

export default home;
