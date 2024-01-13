const path = require("path");

const imageUploader = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/profileImage.html"));
};

const profileImage = (req, res) => {
  res.status(200).send("Image is uploaded!");
};

module.exports = { imageUploader, profileImage };
