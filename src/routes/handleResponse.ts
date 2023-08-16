import { Response } from "express";
import { HttpError } from "../errors/myerrors";

export  const handleResponse=async <T>(res : Response, fn:()=>T)=>{
    try{
    const result =await fn();
    console.log(result);
    res.status(200).send(result);
    }catch(err){
        if(err instanceof HttpError){
            res.status(err.status).send(err.message);
            return;
        }
    }
}