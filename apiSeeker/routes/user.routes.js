const express = require('express');

//const {index,guardar,modificar,ver,login, eliminar} require('./../controllers/usuario.controller');
const usuarioController = require('./../controllers/user.controller');

const router = express.Router();

router.get("/usuario", usuarioController.index);
router.post("/usuario", usuarioController.guardar);
router.get("/usuario/:id", usuarioController.ver);
router.put("/usuario/:id", usuarioController.modificar);
router.delete("/usuario/:id/:estado", usuarioController.eliminar);

router.post("/login", usuarioController.login);

module.exports = router;