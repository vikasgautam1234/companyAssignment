const express = require("express")
const app = express()
app.use(express.json())

app.get("/new", (req,res)=>{
    res.send("nice")
})


app.listen((3000),()=>console.log("server running on port 3000"))