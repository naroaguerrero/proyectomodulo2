const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    req.app.locals.db.collection("cars").find().toArray(function (err, datos) {
        if(err){
            res.send({error: true, contenido: err})
        } else{
            res.send({error: false, contenido: datos})
        }
    })
})

module.exports = router;