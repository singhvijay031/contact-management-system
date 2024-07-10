import { useNavigate, useParams } from "react-router-dom";
import "../assets/css/Register.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FaAt,
  FaPhoneFlip,
  FaRegAddressCard,
  FaUserPlus,
} from "react-icons/fa6";

const EditContact = () => {
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
      .post(
        "http://127.0.0.1:8000/ContactManagementSystem/add-contact",
        values,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
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

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/ContactManagementSystem/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setValues({
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone,
            address: res.data.address,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="add-form-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <h2>Edit Contact</h2>
        <div className="form-group">
          <FaUserPlus />
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="name"
            onChange={handleInput}
            value={values.name}
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
            value={values.email}
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
            value={values.phone}
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
            value={values.address}
          />
        </div>

        <button className="form-btn">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
