const { User } = require("../../models/index.js")
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");

const { generateToken } = require("../../middlewares/auth.js");
const sendEmail = require("../../templates/welcomeEmail");
const imageUpload = require("../../helpers/S3.js");



const usersController = {
    create: async (req, res) => {

        const image = await imageUpload(req.body.photo)
        const errors = validationResult(req);
        // Validate errors
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {
            // Check if user exists
            User.findAll()
                .then(users => {
                    let userToRegister = users.find(i => i.email == req.body.email)
                    if (userToRegister) {
                        return res.status(400).send("User already exist")

                    } else {

                        User.create({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                            photo: image,
                            roleId: req.body.roleId,
                        })
                            .then((result) => {
                                sendEmail(result.email)
                                res.header('auth-token', generateToken(result)).status(200).json(
                                    {
                                        id: result.id,
                                        firstName: result.firstName,
                                        lastName: result.lastName,
                                        email: result.email,
                                    });
                            })
                            .catch((error) => {
                                return res.status(500).send(error)
                            });
                    }
                })
        }
    },
    update: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } else {
            if (req.body.password) {
                req.body.password = bcrypt.hashSync(req.body.password, 10)
            }
            let user = await User.update(req.body, { where: { id: req.params.id } });
            if (user == 0) {
                res.status(400).json({ error: 'User not found or update information empty.' });
            } else {
                res.status(200).json({ success: `The user ${req.params.id} was updated succesfully.` })
            }

        }
    },
    delete: function (req, res) {
        let userId = req.params.id;
        User.destroy({
            where: {
                id: userId
            }
        })
            .then((deletedRecord) => {
                if (deletedRecord === 1) {
                    return res.status(200).json({ message: "Deleted successfully" });
                }
                else {
                    return res.status(404).json({ message: "record not found" })
                }
            })
            .catch((error) => {
                res.status(500).json(error);
            })
    },
    usuarioList: (req, res) => {
        let validations = validationResult(req);
        if (validations.isEmpty()) {
            User.findAll({
                attributes: ['id', 'firstName', 'email', 'roleId'],
            })
                .then((usuarios) => {
                    return res.status(200).json({ message: usuarios })
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
}
module.exports = usersController