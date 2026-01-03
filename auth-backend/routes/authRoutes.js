const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware"); // 👈 NO {}

router.post("/register", register);
router.post("/login", login);

router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Profile accessed successfully",
    userId: req.userId
  });
});

module.exports = router;
