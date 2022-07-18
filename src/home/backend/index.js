import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import database from "./config/Database.js";
import { login, register, home } from "./routes/index.js";

dotenv.config();
const app = express();

try {
  await database.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/register", register);
app.use("/login", login);
app.use("/home", home);

app.listen(3000, () => console.log("Server at Port 3000"));
