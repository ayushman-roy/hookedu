import express from "express";
import * as users from "../controllers/users.js";
import * as console from "../controllers/feed.js";
import * as access_control from "../middleware/user_auth.js";

// express routers as category_request handlers
const root = express.Router();
const register = express.Router();
const feed = express.Router();

// login request_handlers
root.post("/", users.login_post);

// register request_handlers
register.post("/", users.pre_register_post);
register.post("/check", users.verify_otp_post);
register.post("/data", users.register_post);
register.get("/resend_otp", users.resend_otp);

// console request_handlers
feed.use(access_control.verify_user);
feed.get("/", console.feed_get);

export { root, register, feed };
