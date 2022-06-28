const db = require("../../models")

module.exports ={
    async getAllDAO(){
        return db.Organization.findAll({attributes:[name,image,phone,address]})
    },
    async getAllDAOWithSlidesDAO(){
        return db.Organization.findAll({
            attributes:['name','image','phone','address','urlFacebook','urlInstagram','urlLinkedin'],
            include:[{
                model:db.Slides,
                order:[[db.Slides,'order',"desc"]],
                attributes:['imageUrl','text','order']
            }]
        });
    },
    async createOrganizationDAO(organization){
        return db.Organization.create(organization);
    },
    async editOrganizationDAO(organization,idOrganization){
        return await db.Organization.update(organization,{where:{id:idOrganization}});
    }
}