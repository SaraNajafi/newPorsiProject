import { Repository } from "typeorm";
import {v4} from "uuid";
import { AppDataSource } from "../../data-source";
import { UserEntity } from "./entity/user.entity";


export type Role = "Admin" | "Representator" | "Normal";

export function isValidRole(role: Role): role is Role{ //in jash kojas?
    return ["Admin", "Representator", "Normal"].includes(role);
}


export interface User{
    id: string;
    username: string;
    password: string;
    role: Role;
}

export interface createUser{
    username: string;
    password: string;
    role: Role;
}




export class UserRepository{
    
    private userRepo: Repository<UserEntity>;


    constructor(){
        this.userRepo = AppDataSource.getRepository(UserEntity);
    }
    public addUser(user: createUser){
        const my_user = {
            id: v4(),
            username: user.username,
            password: user.password,
            role: user.role
        }
        this.userRepo.save(my_user);
        return my_user;
        
    }

    public findUserById(id: string) {
        const user = this.userRepo.findOneBy({id});
        return user;
    }

    public async findUserByUsername(username: string): Promise<User | null> {
        const user = this.userRepo.findOneBy({username})
        //this.userRepo.save(user as User);
        return user;
    }

    // public static getUserRepo(){
    //     //const userre = new UserRepository();
    //     const myueserrepo= this.userRepo;
    //     return myueserrepo;
    // }


}


