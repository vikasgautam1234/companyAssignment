const express = require('express');
const router =  express.Router();
const multer = require('multer')
const upload = multer() 
const csvtojsonController = require("../controller/csvtojson")


//---------------------API TO UPLOAD CSV DATO INOT MONGODB-----------------------------------------//
router.post('/upload-csv', upload.single('csvfile'), csvtojsonController.uploadData)



module.exports= router