const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res){
        // Encontrar todos os usuários que tem email terminado em @rocketseat.com.br
        // Buscar usuários que moram na rua "Rua Guilherme Gembala"
        //Buscar as técnologias que começam com React 

        const users = await User.findAll({
            attributes: [ 'name', 'email' ],
            where: {
                email: {
                    [Op.iLike]:'%@rocketseat.com.br' 
                },
            },
            include: [
                { association: 'addresses', 
                where: {
                     street: 'Rua guilherme Gembala' 
                    }
                 }, 
                { 
                association: 'techs',
                required: false,
                where:{
                    techs: {
                        [Op.iLike]:'React%' 
                    },
                }
             }, 
            ]
        })

        return res.json(users);
    }
};