import express from "express";
import * as access_control from "../middleware/user_auth.js";
import * as console from "../controllers/feed.js";
import * as match from "../controllers/user_match.js";

// express routers as category_request handlers
const feed = express.Router();

// console request_handlers
feed.use(access_control.verify_user);
feed.get("/", console.feed_get);
feed.post("/user_match", match.user_match);

export { feed };
