import { UserModel } from "../models/User.Model.js";

const Register = (req, res) => {
  console.log("Registered");
  res.send("User Registered");
};

export { Register };
