// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";

const customStyles = {
  headCells: {
    style: {
      fontSize: 15 + "px",
      fontWeight: 600,
    },
  },
  cells: {
    style: {
      fontSize: 13 + "px",
      fontWeight: 500,
    },
  },
};

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

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
          <Link to={`/dashboard/edit-contact/${row._id}`}>
            <FaPenToSquare className="table-icon1" />
          </Link>
          <Link>
            <FaRegTrashCan className="table-icon2" />
          </Link>
        </>
      ),
    },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/ContactManagementSystem/contacts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setContacts(res.data.contacts);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          <CircleLoader
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testide="loader"
          />
        </div>
      ) : (
        <div className="contact-list">
          <DataTable
            columns={columns}
            data={contacts}
            customStyles={customStyles}
            pagination
          />
          {contacts.length === 0 ? <h1>Add a Contact</h1> : <></>}
        </div>
      )}
    </>
  );
};

export default Contact;
