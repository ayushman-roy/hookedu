import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import database from "./src/config/database.js";
import { root, register, feed } from "./src/routes/users.js";

// loads environment variables
dotenv.config();

const app = express();
const corsOptions = { credentials: true, origin: "http://localhost:3000" };

// database authentication
try {
  await database.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.log(error);
}

// parsers: cookies, json, request_body
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// allow CORS
app.use(cors(corsOptions));

// route_handlers
app.use("/", root);
app.use("/hook", register);
app.use("/feed", feed);

app.listen(5001, () => console.log("hookedu: Server Running on Port 5001..."));
