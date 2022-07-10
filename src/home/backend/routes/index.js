import express from "express";
import { pre_register_get, pre_register_post } from "../controllers/Users.js";
// import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";

const register = express.Router();

register.get("/", pre_register_get);
register.post("/", pre_register_post);
// register.get("/verify", verify_otp_get);
// register.post("/verify", verify_otp_post);
// register.get("/data", register_get);
// register.post("/data", register_post);

// base.get("/", refreshToken);
// base.post("/login", Login);
// base.delete("/logout", Logout);

export { register };
