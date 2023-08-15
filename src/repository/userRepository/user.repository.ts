import {v4} from "uuid";


export type Role = "Admin" | "Representator" | "Normal";

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
    private users: User[] = [];

    public addUser(user: createUser){
        const my_user = {
            id: v4(),
            username: user.username,
            password: user.password,
            role: user.role
        }
        this.users.push(my_user);
        return my_user;
        
    }

    public findUserById(id: string) {
        const user = this.users.find(u => u.id === id);
        return user;
    }

    public findUserByUsername(username: string) {
        const user = this.users.find(u => u.username === username);
        return user;
    }



}


