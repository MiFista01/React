import User from "../models/user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import config from "../config/key"
export const getUsers = async (req, res) =>{
    try {
        const users = await User.findAll({attributes:['id','name','email','role']})
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}
export const getUser = async (req, res) =>{
    try {
        
        let user = await User.findOne({attributes:['id','name','email','role'], where:{username:req.body.user}})
        if(user == null){
            user = await User.findOne({attributes:['id','name','email','role'], where:{email:req.body.user}})
        }
        res.json(user)
    } catch (error) {
        console.log(error)
    }
}
export const register = async (req, res) => {
    const {name, email, password, confPassword} = req.body
    if(password != confPassword){
        return res.status(400).json({message:"Password and Confirm Password do not match"})
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await User.create({name, email, password:hashPassword})
    } catch (error) {
        
    }
}
export const Login = async (req, res) => {
    try {
        let user = await User.findOne({attributes:['id','name','email','role'], where:{username:req.body.user}})
        if(user == null){
            user = await User.findOne({attributes:['id','name','email','role'], where:{email:req.body.user}})
        }
        const match = await bcrypt.compare(req.body.password, user.password)
        if(!match) return res.status(400).json({message:"Wrong password"})
        const userId = user.id
        const username = user.username
        const email = user.email
        const accessToken = jwt.sign({userId, username, email}, config.secretKey, { 
            expiresIn:config.lifeAge})
        res.cookie("token", accessToken,{maxAge:86400*1000, httpOnly:true})
        res.json({accessToken})
    } catch (error) {
        res.status(404).json({msg:"Email or username not found"})
    }
}
export const Logout = async (req, res) => {
    const token = req.cookies.token
    if(!token) return res.status(204);
    res.clearCookie('token')
    return res.sendStatus(200)
}