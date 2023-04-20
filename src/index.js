const express = require("express")
const multer = require("multer")
const csvtojson = require('csvtojson')   //The csvtojson library is used to parse CSV data into JSON format.
const mongoose = require("mongoose")
const route = require("./routes/route")

const app = express()
const upload = multer()  //The multer library is used to handle file uploads.
//MongoDB connection string
const dbUrl = "mongodb+srv://new_user:jk1BBWwmxQpZ31zO@cluster0.pxvwsjp.mongodb.net/MyProject3"


mongoose.set('strictQuery', false);    // used this line because of [MONGOOSE] DeprecationWarning
//Connect mongodb using mongoose
mongoose.connect(dbUrl,{useNewUrlParser: true})
.then(()=>console.log("MongoDB is connected"))
.catch(err=>console.error("Mongodb connection error",err))
app.use('/', route)

app.listen(3000,()=>console.log("server started on port 3000"))

















