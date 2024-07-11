import { useContext } from "react";
import { UserContext } from "../App";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setUser } = useContext(UserContext);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  MySwal.fire({
    title: "Are you sure?",
    text: "Do you want to exit?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logout!",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      setUser(null);
      //   MySwal.fire({
      //     title: "Error!",
      //     text: "Error Occured!",
      //     icon: "success",
      //   });
      navigate("/");
    }
  });
};

export default Logout;
