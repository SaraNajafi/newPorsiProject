import { isValid } from "zod";
import { AppDataSource } from "../data-source";
import { userRepository } from "../dependency";
import { ForbiddenErr, HttpError } from "../errors/myerrors";
import { UserEntity } from "../repository/userRepository/entity/user.entity";
import { createUser, isValidRole, Role} from "../repository/userRepository/user.repository";
import { UserDto } from "./user.dto";

//const userRepo = AppDataSource.getRepository(UserEntity);
export const signup=async ({username, password}: UserDto, role:Role)=>{
    const user = await userRepository.findUserByUsername(username)
    if(!isValidRole(role)){
        return new ForbiddenErr();
    }
    if(user !== null){
        console.log("User already exist");
        throw new HttpError(403, "Invalid username or password"); //inja throw karde boodam dorost raftar nemikar

    }if(user === null){
        const createdUser = {username:username, password:password, role:role}
        const myuser= userRepository.addUser(createdUser);

        //userRepo.save(myuser);
        return myuser;
    }
    // }else{
    //     return new ForbiddenErr();
    // }

}