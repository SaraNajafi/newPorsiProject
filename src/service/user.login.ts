import { AppDataSource } from "../data-source";
import { userRepository } from "../dependency";
import { HttpError } from "../errors/myerrors";
import { UserEntity } from "../repository/userRepository/entity/user.entity";
import { User, UserRepository } from "../repository/userRepository/user.repository";
import { UserDto } from "./user.dto";

//const userRepo = UserRepository.getUserRepo();
//const userRepo = AppDataSource.getRepository(UserEntity);
export const login=async (user: UserDto)=>{
    const loggedInUser = await userRepository.findUserByUsername(user.username);
    console.log("logged in user" + loggedInUser?.username);
    if(loggedInUser === null ){
        throw new HttpError(401,"Invalid username or password");
    }
    if(loggedInUser.password === user.password){
        return loggedInUser;
    }
    
};


// inja moshkel daram