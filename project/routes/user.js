"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../src/entity/User");
const PORT = 3000;
const userRoute = express_1.default.Router();
userRoute.post('/addUSR', async (req, res) => {
    const { username, password } = req.body;
    const user = new User_1.User();
    user.username = username;
    user.password = password;
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while saving the user.' });
    }
});
exports.default = userRoute;
