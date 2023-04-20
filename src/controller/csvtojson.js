const mongoose = require("mongoose")
const mySchema = require("../models/csvtojson")
const csvtojson = require('csvtojson') 



const uploadData = async(req,res)=>{
    try{
    const csvData = req.file.buffer.toString('utf8')
    //This should convert the CSV data to a JSON object using csvtojson() and the fromString() method.
    const jsonData = await csvtojson().fromString(csvData);
    // Insert the json data into mongodb using mongoose
    await mySchema.insertMany(jsonData)
    res.status(200).json({message:"data uploaded successfully"})
    }
    catch(error){
        console.error(error);
        return res.status(500).json({ message: 'Internal server error'})
    }
    }

    module.exports.uploadData= uploadData