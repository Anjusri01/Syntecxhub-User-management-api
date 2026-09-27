require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "User Management REST API is running"
  });
});

app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
