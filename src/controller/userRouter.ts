import express  from "express";
import { UserController } from "./UserController";


export const userRouter = express.Router();
const userController = new UserController();

userRouter.post('/createTaks',userController.createTaks)
userRouter.put('/editTaks/:id',userController.editTaks)
userRouter.get('/allTaks',userController.allTaks)
userRouter.delete('/deleteTaks/:id',userController.deleteTaks)