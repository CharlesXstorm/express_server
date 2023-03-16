
const express = require("express")
const path = require("path")
const file = require("fs")
const rootDir = require("../utility/path")

const router = express.Router()

router.post("/admin/message",(req,res,next)=>{
    //  console.log(typeof(req.body.message))
    file.writeFileSync("message.txt",`name: ${req.body.client}\nemail: ${req.body.email}\nmessage: ${req.body.message}`);
    res.redirect("/")
})

router.get("/admin/contact",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","contact.htm"))
})

module.exports = router