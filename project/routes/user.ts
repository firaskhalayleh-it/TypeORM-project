import express from 'express';
import { User } from '../src/entity/User.js';
const PORT = 3000;
const userRoute = express.Router();

userRoute.get('/',(req,res)=>{
    res.send('thanks')
})
userRoute.post('/addUSR', async (req, res) => {

   const {username, password} = req.body;
    const user = new User();
    user.username = username;
    user.password = password;

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while saving the user.' });
    }
});

export default userRoute;
