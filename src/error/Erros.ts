abstract class BaseError extends Error {

    constructor(public status: number, message: string) {
        super(message);
    }
}
export class CustomError extends BaseError {
    constructor(status:number,message:string){
        super(status, message )
    }
};