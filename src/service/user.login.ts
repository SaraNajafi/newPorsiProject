import { AppDataSource } from "../data-source";
import { userRepository } from "../dependency";
import { HttpError } from "../errors/myerrors";
import { UserEntity } from "../repository/userRepository/entity/user.entity";
import { User, UserRepository } from "../repository/userRepository/user.repository";
import { UserDto } from "./user.dto";

const userRepo = new UserRepository();
//const userRepo = AppDataSource.getRepository(UserEntity);
export const login= async (user: UserDto)=>{
    const loggedInUser =await userRepo.findUserByUsername(user.username);
    if(loggedInUser === null ){
        throw new HttpError(401,"Invalid username or password");
    }
    if(loggedInUser.password === user.password){
        return loggedInUser;
    }
    
};


// inja moshkel daram