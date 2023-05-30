import { Jwt, decode } from "jsonwebtoken";
import config from "../config/key"
export const verifyToken = (req, res, next) =>{
    const token = req.cookies.token
    if(token == null) return res.sendStatus(401);
    Jwt.verify(token,config.key, (err,decoded)=>{
        if(err) return res.sendStatus(403)
        req.email = decoded.email;
        req.username = decoded.username;
        next();
    })
}