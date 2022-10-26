import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/Erros";
import { assignment, deletetaks, taks, task } from "../model/taks";



export class UserBusiness {
    public createTaks = async (input: assignment) =>{
        console.log('busi',input)
        const {taks,completed} = input;
        if (!taks){
            throw new CustomError(
                422, "É necessário adicionar uma tarefa."
            );
        };
        
        const id :string = Date.now().toString();
        const newTaks: task = {
            id:id,
            taks,
            completed
        };
        const userDataBase = new UserDatabase();
        await userDataBase.insertTaks(newTaks);
    };


    public editTaks = async(input:taks) => {
        const {id,taks} = input;
        if (!taks || !id){
            throw new CustomError(
                422, "É necessário adicionar ou altera uma tarefa."
            );
        };
        
        const taksEdit :taks ={
            id,
            taks
        };
        const userDataBase = new UserDatabase();
        await userDataBase.editTaks(taksEdit); 
    };
    public allTaks= async () =>{
        const taksall =new UserDatabase();
        const result = await taksall.allTaks();
        return result;
    };
    public deleteTaks = async (id: deletetaks) =>{
        const idTaks :deletetaks = id;
        const userDataBase = new UserDatabase();
        await userDataBase.deleteTaks(idTaks);
    };


}