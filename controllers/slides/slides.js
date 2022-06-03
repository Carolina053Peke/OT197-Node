const uploadFile = require('../../helpers/S3');
const { createSlidesDAO, getSlidesDAO, getFinalList, getOneSlide } = require('./dao');

module.exports = {
    async uploadImage(req, res) {
        const {image,text,order,organizationId} = req.body;
        const extension = image.substring("data:image/".length, image.indexOf(";base64"));
        let newSlide;
        try {
            const {Location : imageUrl } = await uploadFile(image, extension);
            const orderObt = await getFinalList();
            newSlide = {
                imageUrl,
                text,
                order: parseInt(order) || orderObt.dataValues.order,
                organizationId:parseInt(organizationId)
            }
        } catch (error) {
            return res.status(400).json({
                message:'Image could not be uploaded'
            });
        }
        await createSlidesDAO(newSlide).then(data=>{
            return res.status(201).json({
                message:'Slide created'
            });
        }).catch(err=>{
            return res.status(400).json({
                message:'Could not create slide'
            });
        })
    },
    async getSlides(req,res){
        const listSlide = await getSlidesDAO();
        res.status(200).json({
            slides:listSlide
        });
    },
    async getOneSlide(req,res){
        try {
            console.log(req.params.id)
            const slide = await getOneSlide(req.params.id);
            res.status(200).json({
                slide
            })
        } catch (error) {
            return res.status(404).json({
                message:'Slider id no exist!'
            })
        }
        
    }
}