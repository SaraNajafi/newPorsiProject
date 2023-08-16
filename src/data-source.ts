import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserEntity } from "./repository/userRepository/entity/user.entity"
import mysql2 from "mysql2"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "Sara@123",
    database: "porsi",
    synchronize: true,
    logging: false,
    entities: [UserEntity],
    migrations: [],
    subscribers: [],
})
