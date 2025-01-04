# Notebook Application

Notebook is a full-stack MERN (MongoDB, Express, React, Node.js) application for managing notes. This application allows users to create, read, update, and delete (CRUD) their personal notes securely. It is designed to be simple, responsive, and user-friendly.

## Features

- **User Authentication:** Secure signup and login using JWT (JSON Web Tokens).
- **Note Management:** Add, edit, and delete notes easily.
- **Responsive Design:** Fully responsive and accessible on all devices.
- **Secure Backend:** Utilizes bcrypt for password hashing and secure database access.
- **Modern UI:** Clean and intuitive user interface built with React.

## Tech Stack

### Frontend:

- React.js
- Context API for state management
- React Router DOM for navigation

### Backend:

- Node.js
- Express.js
- MongoDB (using Mongoose)

### Deployment:

- [Vercel](https://vercel.com/)

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn
- MongoDB

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ManoharBari/Notebook-App.git
   cd notebook
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd frontend
   npm install

   cd ../backend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `backend` directory with the following:

   ```env
   PORT=8080
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the application:

   - Start the backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Start the frontend:
     ```bash
     cd frontend
     npm start
     ```

5. Open your browser and visit `http://localhost:5173`.

## Deployment

### Live Demo:

- **Frontend:** [Notebook Frontend](https://notebook-webapp.vercel.app)
- **Backend:** [Notebook Backend](https://notebook-app-backend.vercel.app)
