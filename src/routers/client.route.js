import express from "express";
import {} from 'zod';
import ClientController from "../controllers/client.controller.js";
import mongoose from 'mongoose';
import Client from "../models/client.model";

const ClientRouter = express.Router();
const clienteController = new ClientController;

const clientSchema = z.object({
    code: z.string().min(1),
    name: z.string().min(1),
    email: z.string().email(1),
    phone: z.string().min(1),
    city: z.string().min(1),
    addres: z.string().min(1),
    date: z.string().datetime(1),
    status: z.string().min(1),
    action: z.string().refine(val => mongoose.Types.ObjectId.isValid(val),{
        message: "Debe ser un ID valido de MongoDB"
    }),
});

const validateClient = (req, res, next) =>{
    try{
        clientSchema.parse(req.body);
        next();
    }catch(error){
        return res.status(400).json({errors:error.errors})
    }
}

ClientRouter.post('/',validateClient, (req, res)=>{
    clienteController.create(req,res);
});

ClientRouter.get('/', (req, res)=>{
   Client.find({}).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
});

ClientRouter.put('/:id', (req, res)=>{
   Client.updateOne(req,params, {$set: req.body}).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
});

ClientRouter.delete('/:id', (req, res)=>{
   Client.deleteOne(req,params).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
})
        
export default ClientRouter;