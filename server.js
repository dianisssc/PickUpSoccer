const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const PORT = process.env.PORT || 3001;
const app = express();

/*  const multer = require("multer");
 const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
 
cloudinary.config({
  
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
  });
  const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }
  });
   const parser = multer({ storage: storage });*/

const mongoose = require("mongoose")
const profileRouter = require('./routes/profile');
const queryString = require('query-string');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here (api routes)
app.use('/api/profiles', profileRouter);

// Connect to the Mongo DB
const databaseUri = (process.env.MONGODB_URI || "mongodb://localhost/soccer");
if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI)
}
else{
  mongoose.connect(databaseUri);
}

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
  
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });