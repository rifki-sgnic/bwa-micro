const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const mediaHandler = require("./handler/media");

/* POST image. */
router.post("/", mediaHandler.create);
/* GET images */
router.get("/", verifyToken, mediaHandler.getAll);
/* DELETE image */
router.delete("/:id", mediaHandler.destroy);

module.exports = router;
