const express = require("express");
const server = express();
server.use(express.json())
server.use(express.static("public"))

server.get("/",(req,res)=>{
    res.sendFile("index.html")
})

server.post("/scrap",(req,res)=>{
    console.log(req.body);
    res.json({
        "message" : "post successfully"
    })
})

server.listen(8080,()=>{
    console.log("server is running");
})

server.use("*",(req,res)=>{
    res.json({
        "message" : "Invalid Command "
    })
})
