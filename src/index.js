const express = require("express")
const multer = require("multer")
const csvtojson = require('csvtojson')   //The csvtojson library is used to parse CSV data into JSON format.
const mongoose = require("mongoose")

const app = express()
const upload = multer()  //The multer library is used to handle file uploads.
//MongoDB connection string
const dbUrl = "mongodb+srv://new_user:jk1BBWwmxQpZ31zO@cluster0.pxvwsjp.mongodb.net/MyProject3"

//define a moongose schema
const mySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});
const myModel = mongoose.model("MyModel", mySchema)
mongoose.set('strictQuery', false);    // used this line because of [MONGOOSE] DeprecationWarning
//Connect mongodb using mongoose
mongoose.connect(dbUrl,{useNewUrlParser: true})
.then(()=>console.log("MongoDB is connected"))
.catch(err=>console.error("Mongodb connection error",err))


//Route to handle CSV file upload
app.post('/upload-csv', upload.single('csvfile'),async(req,res)=>{
try{
const csvData = req.file.buffer.toString('utf8')
//This should convert the CSV data to a JSON object using csvtojson() and the fromString() method.
const jsonData = await csvtojson().fromString(csvData);
// Insert the json data into mongodb using mongoose
await myModel.insertMany(jsonData)
res.status(200).json({message:"data uploaded successfully"})
}
catch(error){
    return res.status(500).json({ message : error.message})
}
})


app.listen(3000,()=>console.log("server started on port 3000"))







