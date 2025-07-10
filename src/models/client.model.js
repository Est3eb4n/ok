import ClientDTO from "../schema/client.schema.js";
import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    cedula: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    numero: {
        type: String,
        required: true,
        trim: true
    },
    ciudad: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    fecha: {
        type: Date,
        required: true,
        trim: true
    },
    acciones: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: Boolean,
        required: true,
        trim: true
    },
});

const client = mongoose.model('Client', clientSchema);

export default class Client{
    async create(){
        client.insertOne({...(new ClientDTO(req.body)), active:true})
        .then(doc => res.send(doc))
        .catch(error => send(doc))
    };
    async get(){
        client.find({})
        .then((docs) =>{
            res.send(docs)
        })
        .catch((err)=> res.send('error'));
        return client.find().toArray();
    };
    async put(){
        client.updateOne(req, params, {$set: req.body})
        .then((docs)=>{
            res.send(docs);
        })
        .catch((err)=> res.send('error'));

        return client.updateOne({_id},{$set:updateData})
    };
    async delete(){
        client.deleteOne(req, params)
        .then((docs) => {
            res.send(docs);
        })
        .catch((err) => res.send('error'))

        return client.deleteOne({_id})
    };
}