const prisma = require("../db/prisma");

const createPropriete = async (req, res) =>{
    const {typeProprety, description, adress, surface, pieceNumber, price, stat, cards} = req.body;
    try{
        const propriete = await prisma.propriete.create({
            data: { typeProprety, description, adress, surface, pieceNumber, price, stat, cards,
            },
        });
        res.status(201).json(propriete);
    } catch (error){
        res.status(500);
        console.log(error)
    }
};

const getProprietes = async(res) =>{
    try{
        const propriete = await prisma.propriete.findMany();
        console.log('donnée recupèrée avec succès', propriete)
        res.status(200).json(propriete);
    } catch(error){
        res.status(500);
    }
};


const deletePropriete = ('propriete/:id', async (req, res) =>{
    try{
        const propriete = await prisma.propriete.delete({
            where:{
                id: propriete.id
            }
        });
        console.log('Donnée supprimer avec succès');
        res.status(204).send();
    }
    catch(error){ 
        console.error('échec lors de la suppression', error)
        res.status(500).send('Erreur lors de la suppression de la donnée');
    } finally{
        await prisma.$disconnect();
    }
})


module.exports = {
    getProprietes, 
    createPropriete,
    deletePropriete
};