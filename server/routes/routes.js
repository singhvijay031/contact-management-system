import express from "express";
import { Register, Login, Auth } from "../controller/userController.js";
const router = express.Router();
import { body } from "express-validator";
import { VerifyUser } from "../middleware/VerifyUser.js";

router.post(
  "/register",
  [
    body("name").trim().notEmpty().withMessage("Name Should Not Be Empty"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email Should Not Be Empty")
      .isEmail()
      .withMessage("Invalid Email"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Passsword Should Not Be Empty ")
      .isLength({ min: 5, max: 30 })
      .withMessage("Password length Must Be Between 5-30"),
  ],

  Register
);

router.post(
  "/login",
  [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email Should Not Be Empty")
      .isEmail()
      .withMessage("Invalid Email"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Passsword Should Not Be Empty ")
      .isLength({ min: 5, max: 30 })
      .withMessage("Password length Must Be Between 5-30"),
  ],

  Login
);

router.get("/verify", VerifyUser, Auth);

export { router as Router };
