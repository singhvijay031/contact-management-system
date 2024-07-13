import { useNavigate } from "react-router-dom";
import "../assets/css/Register.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FaAt,
  FaPhoneFlip,
  FaRegAddressCard,
  FaUserPlus,
} from "react-icons/fa6";

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
    axios
      .post("https://contact-api-pied.vercel.app/add-contact", values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res);
          toast.success("Contact Added Successfully", {
            position: "top-right",
            autoClose: 5000,
          });
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="add-form-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <h2>Create Contact</h2>
        <div className="form-group">
          <FaUserPlus />
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="name"
            onChange={handleInput}
          />
        </div>

        <div className="form-group">
          <FaAt />
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
          <FaPhoneFlip />
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone Number"
            name="phone"
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <FaRegAddressCard />
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"
            name="address"
            onChange={handleInput}
          />
        </div>

        <button className="form-btn">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
