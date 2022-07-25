import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import database from "./config/database.js";
import { root, register, feed } from "./routes/users.js";

// loads environment variables
dotenv.config();

const app = express();
const corsOptions = { credentials: true, origin: "http://localhost:3000" };

// database authentication
try {
  await database.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

// allows CORS
app.use(cors(corsOptions));
// parsers: cookies, json, request_body
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

// route_handlers
app.use("/", root);
app.use("/hook", register);
app.use("/feed", feed);

app.listen(3000, () => console.log("hookedu Running on Port 3000..."));
