const db = require("../../models");

module.exports = {
    async createMemberDAO(member) {
        await db.Members.create(member);
    },
    async deleteMemberDAO(memberID){
        return await db.Members.destroy({
            where:{id:memberID}
        }
    )},
    async getMemberDAO(memberID){
        await db.Members.findOne({
            where:{id:memberID}
        })
    },
    async getMembersDAO(condition){
        return await db.Members.findAndCountAll(condition);
    },
    async updateMemberDAO(id,member){
        return await db.Members.update(member,{where:{id:id}});
    }
}