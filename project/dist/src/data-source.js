import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User.js";
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'homework',
    entities: [User],
    synchronize: true,
    logging: true
});
export const initialize = () => {
    AppDataSource.initialize().then(() => {
        console.log("Connected to DB!");
    }).catch(err => {
        console.error('Failed to connect to DB: ' + err);
    });
};
