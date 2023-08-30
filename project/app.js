"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const PORT = 3000 || process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', user_1.default);
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
