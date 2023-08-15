import express, { Express, Router } from "express";
import { Response } from "express-serve-static-core";
import { Role } from "../repository/userRepository/user.repository";
import { UserDto } from "../service/user.dto";
import { login } from "../service/user.login";
import { signup } from "../service/user.signup";
import { handleResponse } from "./handleResponse";
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());
export const app = Router();


app.post('/signup', function (req, res) {
    const userDto = {
        username: req.body.username,
        password: req.body.password,
    }
    const role = req.body.role;
    handleResponse(res , ()=>signup(userDto, role));

    
});


app.post('/login', function (req, res) {
    const userDto = {
        username: req.body.username,
        password: req.body.password
    }
    handleResponse(res , ()=>login(userDto));

});





