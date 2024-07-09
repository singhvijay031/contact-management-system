import { validationResult } from "express-validator";
import { UserModel } from "../models/User.Model.js";
import bcrypt from "bcrypt";

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

export { Register };
