const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            numer: DataTypes.INTEGER,

        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.User, {forengKey: 'user_id', as: 'dono'})
    }
}

module.exports = Address;