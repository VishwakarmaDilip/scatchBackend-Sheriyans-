const express = require("express")
const router = express.Router()
const Owener = require("../models/owner.model")

if(process.env.NODE_ENV === "development") {
    router.post("/create",async function(req,res){
        let owner = await Owener.find()
        if(owner.length > 0) {
            return res
                .status(503)
                .send("You don't have permission to create a new owner")
        }

        const  {fullName, email, password} = req.body

        const createdOwner = await Owener.create({
            fullName,
            email,
            password
        })

        res.status(201).send(createdOwner)
    })
}

router.route("/").get(function(req,res) {
    res.send("hey")
})

console.log(process.env.NODE_ENV);





module.exports = router