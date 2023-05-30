import Department from "../models/department.js"

export const getAll = async function(req, res){
    try {
        const all = await Department.findAll()
        res.json(all);
    } catch (error) {
        res.json({ error: error.message})
    }
}
export const getById = async function(req, res){
    try {
        const one = await Department.findOne({where: {id: req.params.id}});
        res.json(one);
    } catch (error) {
        res.json({ error: error.message})
    }
}

export const Create = async function(req, res){
    try {
        let obj = await Department.create(req.body)
        res.json({message:"Created"})
    } catch (error) {
        res.json({ error: error.message})
    }
}
export const Update = async function(req, res){
    try {
        let obj = await Department.update(req.body,{where: {id: req.params.id}})
        res.json({message:"Updated"})
    } catch (error) {
        res.json({ error: error.message})
    }
}
export const Delete = async function(req, res){
    try {
        await Department.destroy({where: {id: req.params.id}})
        res.json({message:"Deleted"})
    } catch (error) {
        res.json({ error: error.message})
    }
}
