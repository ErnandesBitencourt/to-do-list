
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError } from "../error/Erros";
import {  assignment, deletetaks, taks } from "../model/taks";


export class UserController{
    public createTaks = async(req:Request, res:Response) =>{
        console.log("contr",req.body)
        try{
            const taks  = req.body.taks
            const  completed = req.body.completed
            const createTaks:assignment = {
                taks,
                completed
            }   
            const userBusiness = new UserBusiness();
            await  userBusiness.createTaks(createTaks)
            res.status(200).send({message:"Tarefa criada com sucesso!"});
        }catch(error){
            if (error instanceof CustomError) {
                res.status(error.status).send({ message: error.message })
            } else {
                res.status(400).send({ message: "Erro na requisição"})
            }
        };
    };

    public editTaks = async(req:Request,res:Response) =>{
        try{
            const editTaks:taks = {
                id: req.params.id,
                taks:req.body.taks
            };
            const userBusiness = new UserBusiness();
            await userBusiness.editTaks(editTaks);
            res.status(200).send({message:"Tarefa alterado com sucesso!"});
        }catch(error){
            if (error instanceof CustomError) {
                res.status(error.status).send({ message: error.message })
            } else {
                res.status(400).send({message: "Erro na requisição"})
            }
        };
    };

    public allTaks = async(req:Request,res:Response)=>{
        try{
            const alltaks = new UserBusiness();
            const result = await alltaks.allTaks();
            res.status(200).send({result});
        }catch(error){
            if (error instanceof CustomError) {
                res.status(error.status).send({ message: error.message })
            } else {
                res.status(400).send({message: "Erro na requisição"})
            }
        };
    };

    public deleteTaks = async (req:Request, res:Response) =>{
        try{
            const taksId:deletetaks = {
                id:req.params.id
            };
            const idTaks = new UserBusiness()
            await idTaks.deleteTaks(taksId)
            res.status(200).send({message:"Tarefa deletada com sucesso!"});
        }catch(error){
            if (error instanceof CustomError) {
                res.status(error.status).send({ message: error.message })
            } else {
                res.status(400).send({message: "Erro na requisição"})
            }
        };
    };

};