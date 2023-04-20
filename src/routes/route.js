const express = require('express');
const router =  express.Router();
const multer = require('multer')
const upload = multer() 
const csvtojsonController = require("../controller/csvtojson")
const userController = require("../controller/userController")


//---------------------API TO UPLOAD CSV DATO INOT MONGODB-----------------------------------------//
router.post('/upload-csv', upload.single('csvfile'), csvtojsonController.uploadData)

router.post('/users',userController.createUser)
router.get('/users', userController.findAllUser)
router.get('/users/:id',userController.findUser)
router.put('/users/:id',userController.updateUser)


module.exports= router