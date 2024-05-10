const prisma = require("../db/prisma");

const getUsers = async(req, res) =>{
    try{
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch(error){
        res.status(500);
        console.log('pas des users trouver')
    }
};

const registerUsers = async(req, res) =>{
const { email, firstName, secondName, password, profil, typeUser, adress, phone} = req.body
    const user = await prisma.user.create({
        data:{ email, firstName, secondName, password, profil, typeUser, adress, phone
        },
    });

    res.json(user);
};

module.exports = {
    getUsers,
    registerUsers,
};