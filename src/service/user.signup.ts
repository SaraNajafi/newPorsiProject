import { userRepository } from "../dependency";
import { HttpError } from "../errors/myerrors";
import { createUser, Role} from "../repository/userRepository/user.repository";
import { UserDto } from "./user.dto";


export const signup=<T>({username, password}: UserDto, role:Role)=>{
    if(userRepository.findUserByUsername(username)=== undefined){
        const createdUser = {username:username, password:password, role:role}
        userRepository.addUser(createdUser);
        return createdUser;

    }else{
        throw new HttpError(403, "Invalid username or password")
    }

}