import express from "express";
import * as users from "../controllers/Users.js";
import * as middleware from "../middleware/verifyToken.js";

const register = express.Router();
const login = express.Router();
const home = express.Router();

register.get("/", users.pre_register_get);
register.post("/", users.pre_register_post);
register.get("/verify", users.verify_otp_get);
register.post("/verify", users.verify_otp_post);
register.get("/data", users.register_get);
register.post("/data", users.register_post);

login.get("/", users.login_get);
login.post("/", users.login_post);

home.get("/", middleware.verifyToken, users.home_get);

export { register, login, home };
