const { createOrganizationDAO, getAllDAOWithSlidesDAO, editOrganizationDAO } = require("./dao")

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
    },
    async editOrganization(req, res) {
        try {
            const updateOrganization = {
                name: req.body.name,
                image: req.body.image,
                address: req.body.address,
                phone: req.body.phone,
                email: req.body.email,
                welcomeText: req.body.welcomeText,
                aboutUsText: req.body.aboutUsText
            }
            await editOrganizationDAO(updateOrganization, req.params.id)
                .then(resul => {
                    if (resul != 0) {
                        return res.status(200).json({
                            message: "Organization Updated"
                        });
                    }
                    return res.status(404).json({
                        message: "Organization Not found"
                    });
                })
        } catch (err) {
            return res.status(500).json({
                message: 'Internal server error'
            })
        }
    }
}