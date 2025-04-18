const express = require("express");
const app = express()
const cookieParser = require("cookie-parser")
const path = require("path")
const db = require("./config/mongooseConnection.config")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser)
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")

// routes
const ownerRouter = require('./routes/owner.routes')
const userRouter = require('./routes/user.route')
const productRouter = require('./routes/product.routes')


// routes declairation
app.use("/owners",ownerRouter)
app.use("/users",userRouter)
app.use("/products",productRouter)

app.listen(8000, () => {
    console.log("server is runing");
    
})