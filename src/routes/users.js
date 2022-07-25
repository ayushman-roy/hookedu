import express from "express";
import * as users from "../controllers/users.js";
import * as console from "../controllers/feed.js";
import * as access_control from "../middleware/user_auth.js";

// express routers as category_request handlers
const root = express.Router();
const register = express.Router();
const feed = express.Router();

// login request_handlers
root.get("/", users.login_get);
root.post("/", users.login_post);

// register request_handlers
register.get("/", users.pre_register_get);
register.post("/", users.pre_register_post);
register.get("/check", users.verify_otp_get);
register.post("/check", users.verify_otp_post);
register.get("/data", users.register_get);
register.post("/data", users.register_post);

// console request_handlers
feed.get("/", access_control.verify_user, console.feed_get);

export { root, register, feed };
