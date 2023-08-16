import { userRepository } from "../dependency";
import { HttpError } from "../errors/myerrors";
import { User, UserRepository } from "../repository/userRepository/user.repository";
import { UserDto } from "./user.dto";

const userRepo = new UserRepository();
export const login= (user: UserDto)=>{
    const loggedInUser = userRepo.findUserByUsername(user.username);
    if(loggedInUser === null ){
        throw new HttpError(401,"Invalid username or password");
    }
    if(loggedInUser.password !== user.password){ /// chera???
        return loggedInUser;
    }
    
};