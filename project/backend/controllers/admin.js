import models from "../models/index.js"
import jwt from 'jsonwebtoken';
import hbs from 'nodemailer-express-handlebars'
import nodemailer from 'nodemailer'
import path from "path"

export const getAll = async function(req, res){
    
    try {
        const all = await models.applications.findAll({order:[['name', 'ASC']]})
        res.json(all);
    } catch (error) {
        res.send({status:false});
    }
}
export const changeStatus = async function(req, res){
    try {
        let application = await models.applications.findOne({
            where: {id: req.body.id}
        });
        application.update({status:req.body.status})

        let transporter  = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "mifis0site@gmail.com",
                pass: "uspazzyqatzvmpyu"
            } 
        });
        // point to the template folder
        const handlebarOptions = {
            viewEngine: {
                partialsDir: path.resolve('../views/handlebars'),
                defaultLayout: false,
            },
            viewPath: path.resolve('../views/handlebars/'),
        };
    
        // use a template file with nodemailer
        transporter.use('compile', hbs(handlebarOptions))
        let context = ""
        if(req.body.status == true){
            context = "Congratulations to you. We have accepted your application, we are waiting for you during the interview"
        }else{
            context = "Unfortunately, we cannot accept you to our school. We will wait for you next year"
        }
        var mailOptions = {
            from: 'mifis0site@gmail.com', // sender address
            to: `${req.body.email}`, // list of receivers
            subject: 'Registration result',
            template: 'email', // the name of the template file i.e email.handlebars
            context:{
                text: context
            }
        };
    
        // trigger the sending of the E-mail
        transporter.sendMail(mailOptions, function(error, info){
            
        });

        res.send({status:true});
    } catch (error) {
        res.send({status:false});
    }
}
export const LogIn = async function(req, res){
    // try {
        let obj = await models.admin.findOne({where:{[models.Op.or]:[{username:req.body.name},{email:req.body.name}]}})
        if(obj){
            let password =await models.bcrypt.hash(req.body.password, obj.salt)
            if(password == obj.password){
                delete obj.dataValues.password
                delete obj.dataValues.createdAt
                delete obj.dataValues.updatedAt
                let token = await jwt.sign(obj.dataValues, "marsel", { 
                    expiresIn:86400 // 24 hours
                });
                res.send({token: token});
            }else{
                res.sendStatus(401); // Отправка статуса 401 при ошибке авторизации
            }
        }else{
            res.send({status:false});
        }
    // } catch (error) {
    //     res.send({status:false});
    // }
}
export const LogOut = async function(req, res){
    try {
        let obj = await admin.create(req.body)
        res.send({status:true});
    } catch (error) {
        res.send({status:false});
    }
}
export const Create = async function(req, res){
    try {
        let obj = await admin.create(req.body)
        res.send({status:true});
    } catch (error) {
        res.send({status:false});
    }
}
export const Update = async function(req, res){
    try {
        let obj = await admin.update(req.body,{where: {id: req.session.user.id}})
        res.send({status:true});
    } catch (error) {
        res.send({status:false});
    }
}
export const Delete = async function(req, res){
    try {
        await admin.destroy({where: {id: req.params.id}})
        res.send({status:true});
    } catch (error) {
        res.send({status:false});
    }
}
