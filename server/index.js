import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./config/db.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
