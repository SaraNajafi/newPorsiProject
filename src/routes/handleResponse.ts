import { Response } from "express";
import { HttpError } from "../errors/myerrors";

export  const handleResponse=async <T>(res : Response, fn:()=>T)=>{
    try{
    const result =await fn();
    console.log("result is " +result);
    res.status(200).send(result);
    }catch(err){
        console.log(typeof err);
        if(err instanceof HttpError){
            console.log("status: " + err.status+ " message: " + err.message);
            res.status(err.status).send({message: err.message});
            return;

        }
    }
}

// import { Response } from "express";
// import { HttpError } from "./my-error";
// export const handleExpress= <A>(res:Response, fn:()=>A)=>{
//     try{
//     const data = fn();
//     res.status(200).send(data);
//     }catch(err){
//         if(err instanceof HttpError){
//             res.status(err.status).send({message:err.message});
//             return;
//         }
//     }

    
// }