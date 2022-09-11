import express from "express";
import * as user from "../controllers/users.js";
import * as access_control from "../middleware/user_auth.js";
import * as console from "../controllers/feed.js";
import * as match from "../controllers/user_match.js";

// express routers as category_request handlers
const feed = express.Router();

// middleware calls
feed.use(access_control.verify_user);

// console request_handlers
feed.get("/", console.feed_get);
feed.post("/user_match", match.user_match);
feed.get("/user_update", user.user_update_get);
feed.post("/user_update", user.user_update_post);

export { feed };
