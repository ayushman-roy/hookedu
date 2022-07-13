import express from "express";
import * as users from "../controllers/Users.js";
// import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";

const register = express.Router();

register.get("/", users.pre_register_get);
register.post("/", users.pre_register_post);
register.get("/verify", users.verify_otp_get);
register.post("/verify", users.verify_otp_post);
register.get("/data", users.register_get);
register.post("/data", users.register_post);

// base.get("/", refreshToken);
// base.post("/login", Login);
// base.delete("/logout", Logout);

export { register };
