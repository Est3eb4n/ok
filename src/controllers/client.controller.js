import Client from '../models/client.model.js';
import { ObjectId } from 'mongodb';

export default class ClientController{

    #clientModel;

    constructor(){
        this.#clientModel = new Client();
        this.getAll = this.getAll.bind(this); 
        this.getById = this.getById.bind(this); 
        this.create = this.create.bind(this); 
        this.update = this.update.bind(this); 
        this.delete = this.delete.bind(this); 
    };

    async getAll(req,res){
        const client = await this.#clientModel.getAll()
        res.json(client);
    };
    async getAll(req,res){
        const client = await this.#clientModel.getAll()
        res.json(client);
    };
    async getAll(req,res){
        const client = await this.#clientModel.getAll()
        res.json(client);
    };
    async getAll(req,res){
        const client = await this.#clientModel.getAll()
        res.json(client);
    };
    async getAll(req,res){
        const client = await this.#clientModel.getAll()
        res.json(client);
    };
}