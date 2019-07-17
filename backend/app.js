server = require("./server")
ObjetoPerdido = require("./src/objetoPerdido")

mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")
mongoConnection.connect( (db) => {
    objetosPerdidosHome = new Home("objetosPerdidos", db)
    llavesDeAuto = new ObjetoPerdido(new Date(),"llaves de auto","paso a nivel", true)
    llavesNahuel = new ObjetoPerdido(new Date(),"llaves de Corvet", "Casa de la cultura", false)
    objetosPerdidosHome.insert(llavesDeAuto)
    objetosPerdidosHome.insert(llavesNahuel)
    server.register(objetosPerdidosHome)
    server.init();
})

