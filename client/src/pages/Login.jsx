import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Register.css";
import { useContext, useState } from "react";
import Validations from "../components/Validations";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../App";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);
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

    if (!errs.email && !errs.password) {
      axios
        .post("http://127.0.0.1:8000/ContactManagementSystem/login", values)
        .then((res) => {
          if (res.data.success) {
            toast.success("Login Successfully", {
              position: "top-right",
              autoClose: 5000,
            });
            localStorage.setItem("token", res.data.token);
            setUser(res.data.user);
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response && err.response.data.errors) {
            setServerErrors(err.response.data.errors);
          } else {
            setServerErrors([
              { message: "Server error, please try again later." },
            ]);
            console.log(err);
          }
        });
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>

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
            value={values.email}
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
            value={values.password}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        {serverErrors.length > 0 &&
          serverErrors.map((error, index) => (
            <p className="error" key={index}>
              {error.message}
            </p>
          ))}
        <button className="form-btn">Login</button>
        <p>
          Don&apos;t have Account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
