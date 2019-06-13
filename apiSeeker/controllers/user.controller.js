const Usuario = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let index = (req, res)=>{

    Usuario.find({}).exec((err,datos)=>{
        return res.json({
            datos
        });
    });
}

let guardar = (req, res)=>{
    let usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        telefono: req.body.telefono,
        usuario:req.body.usuario,
        clave: bcrypt.hashSync(req.body.clave, 10)
    });
    usuario.save((err, usuarioNew)=>{
        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }
        return res.status(201).json({
            ok: true,
            usuario: usuarioNew
        })
    });
}

let modificar = (req, res)=>{
    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        telefono: req.body.telefono,
        usuario:req.body.usuario,
        clave: bcrypt.hashSync(req.body.clave, 10)
    }
    Usuario.findByIdAndUpdate(req.params.id, usuario,{new : true},(err, UsuarioActualizado)=>{
        if(err){
            return res.status(401).json({
                ok:false,
                err
            });
        }
        return res.json({
            ok: true,
            UsuarioActualizado
        })
    });
}

let eliminar = (req, res)=>{
    Usuario.findByIdAndUpdate(req.params.id, {estado : req.params.estado},{new : true},(err, UsuarioEliminado)=>{
        if(err){
            return res.status(401).json({
                ok:false,
                err
            });
        }
        return res.json({
            ok: true,
            UsuarioEliminado
        })
    });    
}

let ver = (req, res)=>{
    Usuario.findById(req.params.id).exec((err, datos)=>{
        return res.json({
            datos
        });
    });
}

let login = (req, res)=>{
   
    Usuario.findOne({usuario : req.body.usuario},(err, usuario)=>{
        if(err){
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if(!usuario){
            return res.status(404).json({
                ok: false,
                men: "Usuario o clave Invalida"
            })
        }        
        if(!bcrypt.compareSync(req.body.clave, usuario.clave)){
            return res.status(404).json({
                ok: false,
                men: "Usuario o clave Invalida"
            })            
        }
        res.json({
            ok: true,
            usuario
        });
    });

}

module.exports = {
    index,
    guardar,
    modificar,
    eliminar,
    ver,
    login
}