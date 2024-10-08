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
import EditContact from "./components/EditContact";
import Logout from "./pages/Logout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ErrorPage from "./pages/ErrorPage";

export const UserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("https://contact-api-pied.vercel.app/verify", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <DashBoard />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Contact />} />
            <Route path="/dashboard/add-contact" element={<AddContact />} />
            <Route
              path="/dashboard/edit-contact/:id"
              element={<EditContact />}
            />
          </Route>
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <ToastContainer theme="light" />
    </UserContext.Provider>
  );
};

export default App;
