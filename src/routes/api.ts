import express from "express";
import {app as userRoute} from "../routes/user.route";
const bodyParser = require('body-parser');
export const app = express();
app.use(bodyParser.json());

app.use(userRoute);


app.listen(3000, () => {
    console.log('listening on port 3000');
})
