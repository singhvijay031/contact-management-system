// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <FaPenToSquare className="table-icon1" />
          <FaRegTrashCan className="table-icon2" />
        </>
      ),
    },
  ];

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/ContactManagementSystem/contacts", {
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
  return (
    <div className="contact-list">
      <DataTable columns={columns} data={contacts} />
    </div>
  );
};

export default Contact;
