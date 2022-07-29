import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import flash from "connect-flash";
import session from "express-session";
import database from "./src/config/database.js";
import { root, register, feed } from "./src/routes/users.js";

// loads environment variables
dotenv.config();

const app = express();
const corsOptions = { credentials: true, origin: "http://localhost:3000" };
const sessionOptions = {
  secret: "E6bzbwm2FNJcs8mmhYOUHflYRFla6f17oZVPlESE",
  saveUninitialized: true,
  resave: false,
};

// database authentication
try {
  await database.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

// parsers: cookies, json, request_body
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// allow CORS
app.use(cors(corsOptions));
// session management
app.use(session(sessionOptions));
// redirection messages
app.use(flash());

// route_handlers
app.use("/", root);
app.use("/hook", register);
app.use("/feed", feed);

app.listen(5001, () => console.log("hookedu Running on Port 5001..."));
