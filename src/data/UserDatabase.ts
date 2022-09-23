import { CustomError } from "../error/Erros";
import { taks } from "../model/taks";
import { BaseDataBase } from "./BaseDataBase";



export class UserDatabase extends BaseDataBase {
    public insertTaks = async (taks :taks) =>{
        try{
            await BaseDataBase.connection
            .insert({
                id:taks.id,
                taks:taks.taks
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
    
    public deleteTaks = async (taks:taks) =>{
        try {
            await BaseDataBase.connection("Create_to_do_list")
            .delete()
            .where("id",taks.id)  
        } catch (error:any) {
            throw new CustomError(400, error.message || error.sqlMessage )
        }
    };


    public allTaks =async (taks:taks) => {
        try{
            const result = await BaseDataBase.connection("Create_to_do_list")
            .select("id","taks")
            return result
        }catch(error:any){
            throw new CustomError(400, error.message || error.sqlMessage)
        }
    }

};