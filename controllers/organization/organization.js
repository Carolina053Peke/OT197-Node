const { createOrganizationDAO, getAllDAOWithSlidesDAO } = require("./dao")

module.exports = {
    async getAllOrganizations(req, res) {
        await getAllDAOWithSlidesDAO()
            .then(result => {
                return res.status(200).json({
                    organizations: result
                })
            })
            .catch(error => {
                return res.status(500).json({
                    message: 'Internal server error'
                })
            })
    },
    async createOrganization(req, res) {
        try {
            await createOrganizationDAO(req.organization)
                .then(resul => {
                    return res.status(200).json({
                        message: "Organization created"
                    })
                })
        } catch (err) {
            return res.status(500).json({
                message: 'Internal server error'
            })
        }
    }
}