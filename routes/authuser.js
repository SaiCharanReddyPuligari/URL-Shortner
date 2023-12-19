const express= require("express");
const {handleUserSignUp, handleUserLogin} = require("../controllers/authuser")

const router= express.Router();

router.post("/", handleUserSignUp);
router.post("/login", handleUserLogin);

module.exports = router;