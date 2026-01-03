# Auth App

A full-stack authentication application built with React and Node.js, featuring user registration, login, and protected routes.

## Project Structure

```
auth/
├── auth-backend/          # Node.js backend server
│   ├── config/           # Database configuration
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Express middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── server.js         # Main server file
│   └── package.json
└── auth-frontend/         # React frontend with Vite
    ├── src/              # React components
    ├── public/           # Static assets
    ├── vite.config.js    # Vite configuration
    ├── tailwind.config.js # Tailwind CSS config
    └── package.json
```

## Features

- User registration and login
- JWT-based authentication
- Protected routes
- User profile management
- Responsive UI with Tailwind CSS
- RESTful API backend

## Backend Setup

```bash
cd auth-backend
npm install
npm start
```

The server runs on `http://localhost:3000` (or configured port).

### Environment Variables

Create a `.env` file in `auth-backend/` with required database and server configurations.

## Frontend Setup

```bash
cd auth-frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` (Vite default).

## Key Components

### Frontend
- `Login.jsx` - User login page
- `Register.jsx` - User registration page
- `Profile.jsx` - User profile page
- `ProtectedRoute.jsx` - Protected route wrapper
- `Navbar.jsx` - Navigation bar
- `App.jsx` - Main application component

### Backend
- `authController.js` - Authentication logic
- `authMiddleware.js` - JWT verification middleware
- `User.js` - User database model
- `authRoutes.js` - API routes

## Technologies

**Frontend:**
- React
- Vite
- Tailwind CSS
- React Router (implied)

**Backend:**
- Node.js
- Express.js
- Database (configured in `config/db.js`)

## License

MIT