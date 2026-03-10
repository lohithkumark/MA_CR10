const {fetchPlayers , createPlayers , updatePlayers , deletePlayers} = require("../CONTROLLERS/wrestler.controller")

function wrestlerRoutes(app){

    app.get("/api/wrestle" , fetchPlayers)
     app.post("/api/wrestle" , createPlayers)
     app.patch("/api/wrestle/:id" , updatePlayers)
     app.delete("/api/wrestle/:id" , deletePlayers)


}

module.exports = {wrestlerRoutes}