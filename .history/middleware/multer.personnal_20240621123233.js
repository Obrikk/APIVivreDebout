const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Define storage options
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Assuming req.userId contains the user's unique identifier

    const uploadDir = path.join(__dirname, '..', 'uploads')
    const userId = req.userId; 
    const userDir = path.join('uploads', userId.toString());

    // Ensure the directory exists
    fs.mkdirSync(userDir, { recursive: true });

    cb(null, userDir); // specify the destination directory
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    cb(null, basename + '-' + Date.now() + ext); // add a timestamp to ensure uniqueness
  }
});

// Create multer instance with storage options
const upload = multer({ storage: storage });

module.exports = upload;
