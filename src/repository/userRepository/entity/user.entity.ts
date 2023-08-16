import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Role } from "../user.repository";


@Entity("users")
export class UserEntity{

@PrimaryColumn()
id!: string;


@Column()
username!: string;

@Column()
password!: string;

@Column()
role!: Role;

@CreateDateColumn()
createdAt!: Date;

@UpdateDateColumn()
updatedAt!: Date;

}