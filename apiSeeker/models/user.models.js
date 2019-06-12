var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido."]
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: false
    },
    usuario:{
        type: String,
        required: true
    },
    clave:{
        type: String,
        required: true
    },
    estado:{
        type: Boolean,
        required: false,
        default: true
    },
    fechacreacion:{
        type: Date,
        default: Date.now
    }

        
});

module.exports = mongoose.model('Usuario', UsuarioSchema);