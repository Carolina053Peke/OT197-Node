const membersPagination = require("../../utils/pagination");
const { getOffset } = require("../../utils/pagination");
const { getMemberDAO, deleteMemberDAO, createMemberDAO, getMembersDAO, updateMemberDAO } = require("./dao");

module.exports = {
    async createMember(req, res) {
        const receivedMember = {
            name: req.body.name,
            image: req.body.image,
            facebookUrl:req.body.facebookUrl,
            imageUrl:req.body.imageUrl,
            linkedinUrl:req.body.linkedinUrl,
            description:req.body.description
        }
        try {
            const memberCreated = await createMemberDAO(receivedMember);
            return res.status(201).json({
                message: "Member created",
                member: receivedMember
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error'
            })
        }
    },
    async deleteMember(req, res) {
        try {
            const deleted = await deleteMemberDAO(req.params.id);
            if(deleted!=0){
                return res.status(200).json({
                    message: "Member Deleted"
                });
            }
            return res.status(404).json({
                message: "Member not exist"
            });
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error"
            });
        }
    },
    async getMember(req, res) {
        try {
            const member = await getMemberDAO(req.params.id);
            if (!memberID) {
                return res.status(404).json({
                    message: "Member not found"
                });
            }
            return res.status(200).json({
                member
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    },
    async getAllMembers(req, res) {
        const page = parseInt(req.params.page);
        const size = 10;
        const condition = {
            offset:getOffset(page,size),
            limit:size
        }
        try {
            const {count,rows} = await getMembersDAO(condition);
            return res.status(200).json({
                pageNext:membersPagination.getNextPage(page,size,count),
                pagePrevious:membersPagination.getPreviusPage(page),
                members:rows
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error',
            });
        }
    },
    async editMember(req, res) {
        const receivedMember = {
            name: req.body.name,
            image: req.body.image,
            facebookUrl:req.body.facebookUrl,
            imageUrl:req.body.imageUrl,
            linkedinUrl:req.body.linkedinUrl,
            description:req.body.description
        }
        try {         
            const updateMember = await updateMemberDAO(req.params.id,receivedMember);
            if (updateMember != 0) {
                return res.status(200).json({
                    message: "Member update"
                });
            }
            return res.status(404).json({
                message:"Member not found"
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    }
}