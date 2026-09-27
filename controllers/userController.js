const User = require("../models/User");

// CREATE
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = await User.create({
      name,
      email,
      age
    });

    res.status(201).json({
      message: "User created successfully",
      user
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Email already exists"
      });
    }

    res.status(400).json({
      message: "Failed to create user",
      error: error.message
    });
  }
};

// READ ALL
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message
    });
  }
};

// READ ONE
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      message: "Invalid user ID"
    });
  }
};

// UPDATE
exports.updateUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, age },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      user
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Email already exists"
      });
    }

    res.status(400).json({
      message: "Failed to update user",
      error: error.message
    });
  }
};

// DELETE
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid user ID"
    });
  }
};
