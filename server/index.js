import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
