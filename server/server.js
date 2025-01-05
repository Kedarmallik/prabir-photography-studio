const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set up multer for image uploads
const upload = multer({ dest: 'public/uploads/' });

// Upload route
app.post('/upload', upload.single('photo'), (req, res) => {
    const photoUrl = `/uploads/${req.file.filename}`;
    // Generate QR code for the uploaded photo URL
    // Send QR code URL as response
    res.json({ photoUrl: photoUrl });
});

// Serve the app
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
