# Contact Management System

![Contact Management System](https://drive.google.com/drive/u/0/folders/1Rika6uc89HMQ-A4MGESZ4LMd26n3RiZr)

## Overview

The Contact Management System is a web application designed to efficiently manage your contacts. It provides a smart way to store, edit, and manage contacts, ensuring that users can access their information easily and securely.

## Features

- **User Authentication:** Secure user login and registration.
- **Add/Edit Contacts:** Users can add new contacts or edit existing ones.
- **Dashboard:** View and manage all contacts in a user-friendly dashboard.
- **State Management:** Managed with React's Context API.

## Tech Stack

- **Frontend:** React, React Router, Axios, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose for ORM)
- **Hosting:** Vercel (both frontend and backend)

## Project Structure
```plaintext
client/
│
├── src/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── Dashboard.jsx
│ │ ├── AddContact.jsx
│ │ ├── EditContact.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── vite.config.js
│
server/
│
├── config/
│ ├── config.js
│ └── db.js
├── controllers/
│ ├── contactController.js
│ ├── userController.js
├── middleware/
│ ├── authMiddleware.js
├── models/
│ ├── contactModel.js
│ ├── userModel.js
├── routes/
│ ├── contactRoutes.js
│ ├── userRoutes.js
│
├── .env
├── index.js
└── package.json
```
## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/singhvijay031/contact-management-system.git
2. **Install dependencies for both client and server:**
   ```bash
   cd client
   npm install
   cd ../server
   npm install
3. **Set up environment variables:**
   ```bash
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
4. **Start the server:**
   ```bash
   cd server
   npm start
5. **Open the application:**
   Navigate to http://localhost:8000 in your browser.



