import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

const Connection = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("DataBase Connected...");
  } catch (error) {
    console.log("Cannot Connect to DataBase...");
  }
};

Connection();
