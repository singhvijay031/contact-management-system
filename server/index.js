import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./config/db.js";
import { Router } from "./routes/routes.js";

dotenv.config({ path: "./config/.env" });

const app = express();

app.use(express.json());

const corsOptions = {
  origin: ["https://contact-api-pied.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/ContactManagementSystem", Router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
