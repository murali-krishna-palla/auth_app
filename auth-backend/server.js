const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors({
  origin: "https://your-frontend.vercel.app",
  credentials: true
}));
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Auth Backend Running");
});

// Auth routes
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
