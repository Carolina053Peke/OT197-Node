const { Activities } = require("../../models/index.js")
const { validationResult } = require('express-validator')
const { Op } = require('sequelize')
const paginate = require('../../utils/paginate.js')


const activitiesController = {
    create: async (req, res) => {

        const errors = validationResult(req);
        // Validate errors
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {
            try {
                Activities.create(req.body)
                    .then((activity) => {
                        res.status(200).send(activity)
                    })

            } catch (err) {
                res.status(400).json(err);
            }
        }
    },
    update: async(req,res)=>{
        const errors = validationResult(req);
        // Validate errors
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }else{
            try{
                const existActivity = await Activities.update(req.body,{where:{id:req.params.id}})
                if(existActivity!=0){
                    return res.status(200).json(req.body);
                }
                return res.status(404).json({
                    message:"Activity not found"
                })
            }catch (err) {
                res.status(500).json({
                    message:"Internal server error"
                });
            }
        }
    }
}

module.exports = activitiesController