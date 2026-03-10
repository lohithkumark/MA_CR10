const mongoose = require("mongoose");

const wrestlerSchema = new mongoose.Schema({
    player : String , 
    gender : String ,
    age : Number ,
    country : String
})

const wrestlerModel = mongoose.model("wrestlerModel" , wrestlerSchema )

module.exports = {wrestlerModel}