express = require("express");
bodyParser = require("body-parser");
var cors = require('cors');

var homes = {}
const PORT = process.env.PORT || 8888

function register(home) {
  console.log(`registering handlers for ${home.type}`)
  homes[home.type] = home
}

function init() {
  var server = express();
  server.use(bodyParser.json());

  server.use("(/:type/*)|(/:type)", (req, res, next) => {
      if (!homes[req.params.type]) {
          console.log(` home de ${req.params.type} no existe`  )
          res.status(404).end()
      }
      else {
        console.log(` home de ${req.params.type} si existe `  )
        next()
      }
  })

  server.use(cors())

  // server.get("/:type", (req, res) => {
  //   home = homes[req.params.type]
  //   home.find((allObjects) => {
  //       res.json(allObjects)
  //       res.end() })
  // })

  server.get("/:type/:id", (req, res) => {
    home = homes[req.params.type]
    home.get(req.params.id, (myObject) => {
      res.json(myObject)
      res.end() })
  })

  server.get("/:type", (req, res) => {
    var query = {}
    if (req.query.turno) {
      console.log(`Query farmacias: ${req.query.turno}`)
      var deTurno = (req.query.turno == "true")
      query = {"archivado" : deTurno }
    }
    home = homes["objetosPerdidos"]
    home.find(query,
      (allObjects) => {
        res.json(allObjects) 
        res.end()
      })         
  })

  server.get("/:type", (req, res) => {
    var query = {}
    if (req.query.turno) {
      console.log(`Query farmacias: ${req.query.turno}`)
      var deTurno = (req.query.turno == "false")
      query = {"archivado" : deTurno }
    }
    home = homes["objetosPerdidos"]
    home.find(query,
      (allObjects) => {
        res.json(allObjects) 
        res.end()
      })         
  })




 

  server.put("/:type", (req, res) => {
    home = homes[req.params.type]
    home.update(req.body)
    res.status(204).end();
  })

  server.post("/:type", (req, res) => {
    home = homes[req.params.type]
    home.insert(req.body)
    res.status(204).end();
  })

  server.delete("/:type/:id", (req, res) => {
    home = homes[req.params.type]
    home.delete(req.params.id)
    res.status(204).end();
  });

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

exports.init = init;
exports.register = register;
