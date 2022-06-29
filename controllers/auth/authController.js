const { User } = require("../../models/index.js")
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const { token } = require("morgan");
const { generateToken } = require("../../middlewares/auth.js");

const jwt = require("jsonwebtoken");

const authController = {

    login: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const user = await User.findOne({ where: { email: req.body.email } })
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                let token = generateToken(user)
                return res.send({user,token})
            }
            return res.status(401).send({ ok: false })
        }
        return res.status(401).send({ ok: false })
    },
    me: async (req, res) => {
        const token = req.headers["authorization"];
        if (!token) {
            return res.status(401).json({
                message: "Access denied"
            });
        }
        try {
            const verified = jwt.verify(token, process.env.secretJWT);
            res.status(200).json(verified)
        } catch (error) {
            res.status(400).json({
                message: "Token invalid"
            })
        }

    }
}
module.exports = authController