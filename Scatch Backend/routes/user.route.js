const express = require("express")
const router = express.Router()

router.get("/", function(req,res){
    res.send("hey")
})

// router.route("/").get(function(req,res) {
//     res.send("hey")
// })


module.exports = router