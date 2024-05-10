const express = require("express");

const{
    getProprietes, 
    createPropriete,
    deletePropriete,
} = require ("../controllers/propriete");

const router = express.Router();

router.get("/", getProprietes)
router.post("/", createPropriete)
router.delete("/", deletePropriete);
module.exports = router;