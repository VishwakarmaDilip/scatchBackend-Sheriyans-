const mongoose = require('mongoose')
const DB = require('../constants.js')
const config = require("config")
const dbgr = require("debug")("development:mongoose")

mongoose
.connect(`${config.get("MONGODB_URI")}/${DB.DB_Name}`)
.then(function() {
    dbgr("Connected To DB");  
      
})
.catch(function(err) {
    console.log(err);    
})

module.exports = mongoose.connection