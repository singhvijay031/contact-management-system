import { validationResult } from "express-validator";
import { UserModel } from "../models/User.Model.js";

const Register = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return res.status(200).json("OK");
};

export { Register };
