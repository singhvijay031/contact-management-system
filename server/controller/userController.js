import { validationResult } from "express-validator";
import { UserModel } from "../models/User.Model.js";

const Register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { name, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new UserModel({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { Register };
