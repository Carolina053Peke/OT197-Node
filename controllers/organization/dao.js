const { sequelize } = require("../../models");
const db = require("../../models")

module.exports ={
    async getAllDAO(){
        return db.Organization.findAll({attributes:[name,image,phone,address]})
    },
    async getAllDAOWithSlidesDAO(){
        return db.Organization.findAll({
            attributes:['name','image','phone',"address"],
            include:[{
                model:db.Slides,
                order:[[db.Slides,'order',"desc"]],
                attributes:['imageUrl','text','order']
            }]
        });
    },
    async createOrganizationDAO(organization){
        return db.Organization.create(organization);
    }
}