const { wrestlerModel } = require("../MODEL/wrestler.model")
const wrestlerRoutes  = require("../ROUTES/wrestler.routes")


async function fetchPlayers(req , res){
let allPlayer =await  wrestlerModel.find();
res.status(200).send(allPlayer)

}

async function createPlayers( req, res){
    const{player , gender , age , country} = req.body;
     const newPlayer =  await wrestlerModel.create({player , gender , age , country});
     res.status(201).send(newPlayer);  
}

async function updatePlayers(req , res){
    const {id} = req.params;
    const updatePlayers = await wrestlerModel.findByIdAndUpdate(id , req.body)
    res.status(201).send(updatePlayers);
}

async function deletePlayers(req, res){
    const {id} = req.params;
    const deletePlayers = await wrestlerModel.findByIdAndDelete(id)
    res.status(200).send(deletePlayers);
}

module.exports = {fetchPlayers , createPlayers , updatePlayers , deletePlayers}