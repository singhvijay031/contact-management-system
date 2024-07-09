import express, { Router } from "express";
import Register from "../controller/userController";
const router = express.Router();

router.post("/register", Register);

export { router as Router };
