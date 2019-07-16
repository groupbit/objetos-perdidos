server = require("./server")

mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")
mongoConnection.connect( (db) => {
    objetosPerdidosHome = new Home("objetosPerdidos", db)
    objetosPerdidosHome.insert({fechadeIngreso: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),descripcion:"llaves de auto", lugar:"paso a nivel", estado:false? "Perdido" : "Encontrado"})
    server.register(objetosPerdidosHome)
    server.init();
})

