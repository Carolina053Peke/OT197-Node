const express = require('express');
const router = express.Router();
const { createMember, deleteMember, getAllMembers, editMember } = require('../controllers/members/members.js');
const {validateToken,generateToken}= require('../middlewares/auth');
const { validateMember } = require('../middlewares/validationsMembers.js');


router.get("/:page",getAllMembers,validateToken);
router.post("/",validateMember,validateToken,createMember);
router.delete("/:id",validateToken,deleteMember);
router.put("/:id",validateMember,validateToken,editMember);

module.exports = router;