"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "homework",
    synchronize: true,
    logging: false,
    entities: [User_1.User],
    migrations: [],
    subscribers: [],
});
const initialize = () => {
    exports.AppDataSource.initialize().then(() => {
        console.log('connected to DB!');
    }).catch((error) => {
        console.log(error);
    });
};
exports.initialize = initialize;
