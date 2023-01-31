const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const usersHandler = require("./handler/users");

/* POST users. */
router.post("/register", usersHandler.register);
router.post("/login", usersHandler.login);
router.post("/logout", verifyToken, usersHandler.logout);
router.put("/", verifyToken, usersHandler.update);
router.get("/", verifyToken, usersHandler.getUser);

module.exports = router;
