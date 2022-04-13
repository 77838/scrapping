const express = require("express");
const request = require("request");
const {scrapper2} = require("./main2.js")
const {scrapper1} = require("./main.js")
const {result} = require("./result")
const {finalresult} = require("./FinalResult")


const server = express();
server.use(express.json())
server.use(express.static("public"))


server.get("/",(req,res)=>{
    res.sendFile("index.html")
})

server.post("/scrap", async (req,res)=>{
    console.log(req.body);
    let link1 = req.body.link1
    let link2 = req.body.link2
    await scrapper1(link1);
    await scrapper2(link2)
    await result()
    await finalresult()

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
