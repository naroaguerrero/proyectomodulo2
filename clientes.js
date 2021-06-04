const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt')


//-------------RUTA PUT: REGISTRO CLIENTES-------------
router.post("/", function (req, res) {
  let cifrado = bcrypt.hashSync(req.body.password, 10)
  req.app.locals.db.collection("clients")
    .find({ usuario: req.body.usuario })
    .toArray(function (err, data) {
      if (err) {
        res.send({ error: true, contenido: err });
      } else {
        if (data.length === 0) {
          req.app.locals.db
            .collection("clients")
            .insertOne({nombre: req.body.nombre, apellido: req.body.apellido, usuario: req.body.usuario, edad: req.body.edad, password: cifrado, dni: req.body.dni}, function (err, data) {
              err
                ? res.send({ error: true, contenido: err })
                : res.send({
                    error: false,
                    contenido: {
                      respuesta: data,
                      mensaje: "Usuario registrado correctamente, gracias.",
                    },
                  });
            });
        } else {
          res.send({
            error: false,
            contenido: { mensaje: "Lo sentimos, el usuario ya está registrado." },
          });
        }
      }
    });
});
//---------------------------------------------------

//-------------RUTA PUT: EDITAR CLIENTES-------------

router.put("/", function (req, res) {
  let cifrado = bcrypt.hashSync(req.body.password, 10)
  req.app.locals.db
    .collection("clients").find({usuario: req.body.usuario}).toArray(function (err, datos) {
      if(err){
        res.send({ error: true, contenido: error })
      } else{
        if(datos.length === 1){
          req.app.locals.db
    .collection("clients").updateOne(
      { usuario: req.body.usuario },
      { $set: { nombre: req.body.nombre, apellido: req.body.apellido, edad: req.body.edad, password: cifrado} },
      function (err, data) {
        if (err != null) {
          res.send({ err: true, contenido: err });
        } else {
          res.send({ err: false, contenido: {respuesta: data, mensaje: "Usuario modificado correctamente, gracias."} });
        }
      }
    )
        } else{
          res.send({ error: false, contenido:{mensaje: "Usuario no encontrado, lo sentimos."}})
        }
      }
    ;
});
})
//---------------------------------------------------

//-------------RUTA DELETE: BORRAR CLIENTES-------------
router.delete("/", function (req, res) {
  req.app.locals.db.collection("clients")
    .find({ usuario: req.body.usuario })
    .toArray(function (err, data) {
      if (err) {
        res.send({ error: true, contenido: err });
      } else {
        if (data.length === 1) {
          req.app.locals.db
            .collection("clients")
            .deleteOne({dni: req.body.dni, usuario: req.body.usuario},function (err, data) {
              err
                ? res.send({ error: true, contenido: err })
                : res.send({
                    error: false,
                    contenido: {
                      respuesta: data,
                      mensaje: "Usuario borrado correctamente, gracias.",
                    },
                  });
            });
        } else {
          res.send({
            error: false,
            contenido: { mensaje: "Lo sentimos, no se ha podido borrar el usuario ya que no está registrado en nuestra plataforma." },
          });
        }
      }
    });
});
//---------------------------------------------------

module.exports = router;