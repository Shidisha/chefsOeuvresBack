const express = require("express")
const {getUsers, registerUsers} = require("../controllers/users");
const router = express.Router();

router.get("/", getUsers).post("/", registerUsers);

module.exports = router;