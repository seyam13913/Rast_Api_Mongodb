const express = require("express");

const {
  getAllUsers,
  createUser,
  getSingleUsers,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.get("/:id", getSingleUsers);
router.delete("/:id", deleteUser);

module.exports = router;
