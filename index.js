const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { wrestlerRoutes } = require("./ROUTES/wrestler.routes");

mongoose.connect("mongodb+srv://lohitkumar2003_db_user:.fn6nozu.mongodb.net")
.then((data)=>{
    console.log("DB CONNECTED")
})
.catch((err)=>{
    console.log(err)
})

app.use(express.json());
wrestlerRoutes(app);

// mSfx7yscQOBaFool
// lohitkumar2003_db_user
// mongodb+srv://lohitkumar2003_db_user:mSfx7yscQOBaFool@m10.fn6nozu.mongodb.net/

app.get("/home",(req , res)=>{
    res.send("Home page")
    console.log(req)
})


const PORT = 5555;

app.listen(PORT,()=>{
    console.log(`SERVER RUNNING AT PORT NUMBER ${PORT}`)
})
