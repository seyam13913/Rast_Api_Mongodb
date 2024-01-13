const express = require("express");
const multer = require("multer");

const {
  imageUploader,
  profileImage,
} = require("../controllers/image.controller");

const router = express();

// file uploade storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(cb(null, "uploads/"));
  },

  filename: function (req, file, cb) {
    const name = file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

// image router
router.get("/", imageUploader);
router.post("/", upload.single("image"), profileImage);

module.exports = router;
