// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/ContactManagementSystem/add-contact", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setContacts(res.data.contacts);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>Contact</div>;
};

export default Contact;
