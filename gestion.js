const express = require("express");
const router = express.Router();

//-------------CHECKIN RESERVA COCHE-------------
router.post("/", function (req, res) {
  req.app.locals.db
    .collection("clients")
    .find({ dni: req.body.dni })
    .toArray(function (err, data) {
      if (err) {
        res.send({ error: true, contenido: err });
      } else {
        if (data.length === 1) {
          req.app.locals.db
            .collection("cars")
            .find({$and: [{numero: req.body.numero, estado: "Libre"}]})
            .toArray(function (err, data) {
              if (err) {
                res.send({ error: true, contenido: err });
              } else {
                  if (data.length === 1) {
                    req.app.locals.db.collection("booking").insertOne(
                      {
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        dni: req.body.dni,
                        checkin: req.body.fecha,
                        checkout:"",
                        numero: req.body.numero,
                      },
                      function (err, data) {
                        if (err) {
                          res.send({ error: true, contenido: err });
                        } else {
                          req.app.locals.db.collection("cars").updateOne({
                            matricula: req.body.matricula
                          },{
                            $set:{estado: "Ocupado"}
                          }, function (err, data) {
                        if (err) {
                          res.send({ error: true, contenido: err });
                        }else{
                          res.send({
                            error: false,
                            contenido: {
                              mensaje: "Reserva realizada correctamente, gracias",
                              respuesta: data,
                            },
                        });
                        }})}})}} })
                        
                    }else {
                      res.send({
                        error: false,
                        contenido: {
                          mensaje: "El coche solicitado no lo tenemos actualmente, lo sentimos",
                          respuesta: data,
                        },
                      });
                      };
                  }});
        
        }else {
          res.send({
            erro: false,
            contenido: { mensaje: "Usuario no registrado, necesita registrarse en nuestra plataforma", respuesta: data },
          });
        }
//----------------------------------------

module.exports = router;
