const express = require("express");
const router = express.Router();

const mediaHandler = require("./handler/media");

/* POST image. */
router.post("/", mediaHandler.create);
/* GET images */
router.get("/", mediaHandler.getAll);
/* DELETE image */
router.delete("/:id", mediaHandler.destroy);

module.exports = router;
