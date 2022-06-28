module.exports = {
    validateMember(req,res,next){
        if (!req.body.name || typeof req.body.name !== 'string') {
            return res.status(400).json({
                ok: false,
                message: "Name is required and type string"
            })
        }
        if(! req.body.image ){
            return res.status(400).json({
                ok: false,
                message: "Image is required"
            })
        }
        next();

    }
}