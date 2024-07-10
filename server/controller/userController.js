import { validationResult } from "express-validator";
import { UserModel } from "../models/User.Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "../config/.env" });

const Register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { name, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ errors: [{ message: "User already exists" }] });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashPassword });
    const result = await newUser.save();
    result._doc.password = undefined;
    return res.status(201).json({ success: true, ...result._doc });
  } catch (error) {
    console.log("Error registering user:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

const Login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res
        .status(400)
        .json({ errors: [{ message: "User not registered" }] });
    }
    const cmpPassword = await bcrypt.compare(password, existingUser.password);
    if (!cmpPassword) {
      return res
        .status(400)
        .json({ errors: [{ message: "Invalid password" }] });
    }
    const token = jwt.sign(
      { _id: existingUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "2d" }
    );
    const user = { ...existingUser._doc, password: undefined };
    return res.status(201).json({ success: true, user, token });
  } catch (error) {
    console.log("Error logging in user:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

const Auth = (req, res) => {
  return res.status(200).json({ success: true, ...req.user._doc });
};

export { Register, Login };
