'use strict'

const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports.validateToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({
            message: "Access denied"
        });
    }
    try {
        const verified = jwt.verify(token, process.env.secretJWT);
        req.user = verified;
        next();
    } catch (error) {
        res.status(403).json({
            message: "Token invalid"
        })
    }
}

module.exports.generateToken = (user) => {

    const token = jwt.sign(
        {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            roleId: user.roleId
        }
        , process.env.secretJWT,
        { expiresIn: '1h' });
    return token;
};
