const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.Address, {forengKey: 'user_id', as: 'addresses'})
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'tecnologias' })

    }
}

module.exports = User;