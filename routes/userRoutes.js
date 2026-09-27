const express = require("express");
const router = express.Router();

const basicAuth = require("../middleware/basicAuth");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require("../controllers/userController");

// Protect all user endpoints with Basic Authentication
// router.use(basicAuth);

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
