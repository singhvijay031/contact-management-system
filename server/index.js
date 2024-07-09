import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./config/db.js";
import { Router } from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config({ path: "./config/.env" });

app.use("/ContactManagementSystem", Router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
