
const express = require("express")
const app = express()
const bodyparser = require('body-parser')
const path = require('path')

const shopRouter = require('./routes/shop')
const contactRouter = require("./routes/contact")

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use(contactRouter)

app.use(shopRouter)

app.listen(3000)