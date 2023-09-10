import guest from "../models/applications.js"


export const Create = async function(req, res){
    try {
        let obj = await guest.create(req.body)
        res.send({status: true})
    } catch (error) {
        res.json({ error: error.message})
    }
}