const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage; // Correct import
const mongoose = require('mongoose');
const {  uuidv4 } = require('uuid'); // Optional for unique filenames

// Create a GridFS storage engine
const storage = new GridFsStorage({
  url: 'mongodb+srv://user123:test123@backenddb.jtwbp.mongodb.net/?retryWrites=true&w=majority&appName=BackendDb',
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];
    if (match.indexOf(file.mimetype) === -1) {
      return {
        bucketName: 'photos',
        filename: `${Date.now()}-${file.originalname}` // Custom filename for non-image files
      };
    }
    return {
      bucketName: 'photos', // Bucket name for storing images
      filename: `${Date.now()}-${uuidv4()}-${file.originalname}` // Unique filename for images
    };
  }
});

const upload = multer({ storage });

module.exports = upload;
