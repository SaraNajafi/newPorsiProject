import express, { Express, Router } from "express";
import { Response } from "express-serve-static-core";
import { AppDataSource } from "../data-source";
import { UserEntity } from "../repository/userRepository/entity/user.entity";
import { Role } from "../repository/userRepository/user.repository";
import { UserDto } from "../service/user.dto";
import { login } from "../service/user.login";
import { signup } from "../service/user.signup";
import { handleResponse } from "./handleResponse";
import { ZodError } from "zod";
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());
export const app = Router();


app.post('/signup', async function (req, res) {
    try{
    const userDto = {
        username: req.body.username,
        password: req.body.password,
    }
    const role = req.body.role;
    await handleResponse(res , ()=> signup(userDto, role));
}catch(err){
    if (err instanceof ZodError){
        res.status(400).send({message: err.message});
    }

}
});


app.post('/login', function (req, res) {
    
    const userDto = {
        username: req.body.username,
        password: req.body.password
    }
    handleResponse(res , ()=>login(userDto));

});





