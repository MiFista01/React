import express from 'express';
import db from "./connection/database.js"
import applications from "./routes/applications.routes.js";
import models from "./models/index.js"
import admin from "./routes/admin.routes.js";

import cors from "cors";
import bodyParser from 'body-parser';
import session from 'express-session';
import bcrypt from "bcrypt";
import passport from 'passport';
import {Strategy} from 'passport-local';
db.sync();

async function ADMIN(){
    let salt = await bcrypt.genSalt(10)
    let password =await bcrypt.hash("1234",salt)
    models.admin.findOrCreate({where:{username:"admin"},defaults:{username:"admin", email:"mifis0site@gmail.com", role: 2, password, salt}})
}

const app = express();
try {
    await db.authenticate()
   ADMIN()
}catch (e) {
    console.error("Not authenticated", e)
}

// ===================settings============================
app.use(cors());
app.use(
    session({
      secret: 'secret-key', // Секретный ключ для подписи сессии (может быть любой строкой)
      resave: false,
      saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(
    new Strategy(async (username, password, done) => {
      // Найти пользователя по имени пользователя
      const user = await models.admin.findOne({where:{[models.Op.or]:[{username:username},{email:username}]}})
  
      if (!user) {
        return done(null, false, { message: 'Wrong name' });
      }
  
      // Проверить соответствие пароля
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          // Авторизация успешна, передать данные пользователя в коллбэк
          return done(null, user);
        } else {
          return done(null, false, { message: 'Wrong password' });
        }
      });
    })
);
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    const user = await models.admin.findOne({where:{id: id}})
    done(null, user);
});
app.use(bodyParser.json({limit: "4000mb"}));
app.use(bodyParser.urlencoded({limit: "4000mb", extended: true, parameterLimit:50000}));
// ===================settings============================

// ==============================routes=============================
app.use('/applications', applications)
app.use("/admin", admin)
// ==============================routes=============================


app.listen(5000); 
