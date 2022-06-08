module.exports = {
    validateBody(req,res,next){
        if(!req.body.name && !req.body.image && !req.body.email){
            res.status(400).json({
                message:'The fields name, image and email are required!'
            });
        }

        const organization = {
            name:req.body.name,
            image:req.body.image,
            email:req.body.email,
            address:req.body.address,
            phone:req.body.phone,
            welcomeText:req.body.welcomeText,
            aboutUsText:req.body.aboutUsText
        }

        req.organization = organization;
        next();
    }
}