import express from 'express';
import db from "./connection/database.js"
import departmentRouter from "./routes/department.routes.js";
import professionRouter from "./routes/profession.routes.js";

import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import User from './models/user.js';

db.sync();


const app = express();
try {
    await db.authenticate()
    console.log("Authenticated")
}catch (e) {
    console.error("Not authenticated", e)
}

// ===================settings============================
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json({limit: "4000mb"}));
app.use(bodyParser.urlencoded({limit: "4000mb", extended: true, parameterLimit:50000}));
// ===================settings============================

// ==============================routes=============================
app.use('/department',departmentRouter)
app.use("/profession", professionRouter)
// ==============================routes=============================


app.listen(5000); 
