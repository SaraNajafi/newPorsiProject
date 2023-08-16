import { AppDataSource } from "../data-source";
import { userRepository } from "../dependency";
import { HttpError } from "../errors/myerrors";
import { UserEntity } from "../repository/userRepository/entity/user.entity";
import { createUser, Role} from "../repository/userRepository/user.repository";
import { UserDto } from "./user.dto";

//const userRepo = AppDataSource.getRepository(UserEntity);
export const signup=async <T>({username, password}: UserDto, role:Role)=>{
    const user = await userRepository.findUserByUsername(username)
    if(user === null){
        const createdUser = {username:username, password:password, role:role}
        const myuser= userRepository.addUser(createdUser);

        //userRepo.save(myuser);
        return createdUser;

    }else{
        throw new HttpError(403, "Invalid username or password")
    }

}