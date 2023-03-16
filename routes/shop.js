
const express = require("express")
const router = express.Router()
const path = require('path')
const rootDir = require("../utility/path")

router.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.htm'))
})

module.exports = router