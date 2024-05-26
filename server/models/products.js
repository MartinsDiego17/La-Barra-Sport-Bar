const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('product', {
        /*         id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, allowNull: false, primaryKey: true }, */
        image: { type: DataTypes.TEXT, allowNull: false, },
        name: { type: DataTypes.STRING, allowNull: false, },
        category: { type: DataTypes.STRING, allowNull: false, },
        price: { type: DataTypes.INTEGER, allowNull: false, },
        stock: { type: DataTypes.BOOLEAN, },
    }, { timestamps: false });
};  
