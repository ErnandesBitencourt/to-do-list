import { CustomError } from "../error/Erros";
import { deletetaks, taks, task } from "../model/taks";
import { BaseDataBase } from "./BaseDataBase";



export class UserDatabase extends BaseDataBase {
    public insertTaks = async (task :task) =>{
        try{
            console.log(task)
            await BaseDataBase.connection
            .insert({
                id:task.id,
                taks:task.taks,
                completed:task.completed
            })
            .into("Create_to_do_list");
        }catch(error:any){
            throw new CustomError(400,error.message || error.sqlMessage )
        }
    };

    public editTaks = async(taks:taks) =>{
        try {
            await BaseDataBase.connection
            .update ({taks:taks.taks})
            .where({id:taks.id})
            .into("Create_to_do_list");
        }catch(error:any){
            throw new CustomError(400, error.message || error.sqlMessage )
        }
    };
    
    public deleteTaks = async (taks:deletetaks) =>{
        try {
            await BaseDataBase.connection("Create_to_do_list")
            .delete()
            .where("id",taks.id)  
        } catch (error:any) {
            throw new CustomError(400, error.message || error.sqlMessage )
        }
    };


    public allTaks =async () => {
        try{
            const result = await BaseDataBase.connection("Create_to_do_list")
            .select("id","taks","completed")
            return result
        }catch(error:any){
            throw new CustomError(400, error.message || error.sqlMessage)
        }
    }

};