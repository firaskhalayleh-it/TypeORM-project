import "reflect-metadata";
import express from 'express';
import userRoute from "./routes/user.js";
import { initialize } from "./src/data-source.js";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use('/user', userRoute);
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
    initialize();
});
