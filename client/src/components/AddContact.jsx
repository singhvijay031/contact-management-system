import { useNavigate } from "react-router-dom";
import "../assets/css/Register.css";
import { useState } from "react";
import Validations from "../components/Validations";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddContact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = Validations(values);
    // setErrors(errs);
    if (errs.name === "" && errs.email === "" && errs.password === "") {
      axios
        .post("http://127.0.0.1:8000/ContactManagementSystem/register", values)
        .then((res) => {
          if (res.data.success) {
            console.log(res);
            toast.success("Account Created Successfully", {
              position: "top-right",
              autoClose: 5000,
            });
            navigate("/login");
          }
        })
        .catch((err) => {
          if (err.response.data.errors) {
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
        <h2>Create Contact</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="name"
            onChange={handleInput}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            autoComplete="off"
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone Number"
            name="phone "
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"
            name="address"
            onChange={handleInput}
          />
        </div>

        <button className="form-btn">Add</button>
        {/* <p>
          Already Registered? <Link to="/login">Login</Link>
        </p> */}
      </form>
    </div>
  );
};

export default AddContact;
