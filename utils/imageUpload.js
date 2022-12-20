const cloudinary = require("cloudinary").v2;
require('dotenv').config();
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const Storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
      folder: "imagefile",
      allowedFormats : ['jpeg', 'png', 'jpg'],
  },
});
// console.log("cloudinary Storage",Storage);

const upload = multer({ storage: Storage })
module.exports ={ cloudinary,upload,Storage};