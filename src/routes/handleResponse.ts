import { Response } from "express";
import { HttpError } from "../errors/myerrors";

export  const handleResponse=<T>(res : Response, fn:()=>T)=>{
    try{
    const result = fn();
    res.status(200).send(result);
    }catch(err){
        if(err instanceof HttpError){
            res.status(err.status).send(err.message);
            return;
        }
    }
}