
const express = require("express")
const path = require("path")
const rootDir = require("../utility/path")

const router = express.Router()

router.post("/admin/message",(req,res,next)=>{
    console.log(req.body)
    res.status(302).redirect("/")
})

router.get("/admin/contact",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","contact.htm"))
})

module.exports = router