import express from "express";
import { ContactModel } from "../models/Contact.Model.js";

const createContact = async (req, res) => {
  const { name, email, phone, address } = req.body;

  try {
    const newContact = new ContactModel({
      name,
      email,
      phone,
      address,
      postedBy: req.user._id,
    });

    const result = await newContact.save();
    return res.status(201).json({ success: true, ...result._doc });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await ContactModel.find({ postedBy: req.user._id });
    return res.status(200).json({ success: true, contacts });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export { createContact, getContacts };
