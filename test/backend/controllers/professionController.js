import Professions from "../models/profession.js"

export const getAll = async function(req, res){
    try {
        const all = await Professions.findAll({
            include:'department',
            order:[['name', 'ASC']]
        })
        res.json(all);
    } catch (error) {
        res.json({ error: error.message})
    }
}
export const getById = async function(req, res){
    try {
        const one = await Professions.findOne({
            include:'department',
            where: {id: req.params.id}
        });
        res.json(one);
    } catch (error) {
        res.json({ error: error.message})
    }
}
export const getByDepartment = async function(req, res){
    try {
        const one = await Professions.findAll({
            include:'department',
            where: {department_id: req.params.id}
        });
        res.json(one);
    } catch (error) {
        res.json({ error: error.message})
    }
}
export const Create = async function(req, res){
    try {
        let obj = await Professions.create(req.body)
        res.json({message:"Created"})
    } catch (error) {
        res.json({ error: error.message})
    }
}
export const Update = async function(req, res){
    try {
        let obj = await Professions.update(req.body,{where: {id: req.params.id}})
        res.json({message:"Updated"})
    } catch (error) {
        res.json({ error: error.message})
    }
}
export const Delete = async function(req, res){
    try {
        await Professions.destroy({where: {id: req.params.id}})
        res.json({message:"Deleted"})
    } catch (error) {
        res.json({ error: error.message})
    }
}