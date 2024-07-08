import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Register.css";
import { useState } from "react";
import Validations from "../components/Validations";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [serverErrors, setServerErrors] = useState([]);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = Validations(values);
    setErrors(errs);
    if (errs.name === "" && errs.email === "" && errs.password === "") {
      axios
        .post("http://127.0.0.1:8000/ContactManagementSystem/register", values)
        .then((res) => {
          if (res.data.success) {
            toast.success("Account Created Successfully", {
              position: "top-right",
              autoClose: 5000,
            });
            navigate("/login");
          }
        })
        .catch((err) => {
          if (err.response && err.response.data.errors) {
            setServerErrors(err.response.data.errors);
          } else {
            console.log(err);
          }
        });
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Create An Account</h2>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="name"
            onChange={handleInput}
          />
          {errors.name && <span className="error"> {errors.name} </span>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            autoComplete="off"
            onChange={handleInput}
          />
          {errors.email && <span className="error"> {errors.email} </span>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="*******"
            name="password"
            onChange={handleInput}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        {serverErrors.length > 0 &&
          serverErrors.map((error, index) => (
            <p className="error" key={index}>
              {error.msg}
            </p>
          ))}
        <button className="form-btn">Register</button>
        <p>
          Already Registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
