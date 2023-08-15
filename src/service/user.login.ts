import { userRepository } from "../dependency";
import { HttpError } from "../errors/myerrors";
import { UserDto } from "./user.dto";


export const login= (user: UserDto)=>{
    const loggedInUser = userRepository.findUserByUsername(user.username);
    if(loggedInUser && loggedInUser.password === user.password){
        return loggedInUser;
    }
    if(loggedInUser === undefined){
        throw new HttpError(404, "User not found");
    }

};