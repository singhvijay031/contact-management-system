import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import DashBoard from "./pages/DashBoard";
import Contact from "./components/Contact";
import AddContact from "./components/AddContact";

export const UserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/ContactManagementSystem/verify", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Fixed typo in 'Bearer'
        },
      })
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.user);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />}>
            <Route index element={<Contact />} />
            <Route path="/dashboard/add-contact" element={<AddContact />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer theme="dark" />
    </UserContext.Provider>
  );
};

export default App;
