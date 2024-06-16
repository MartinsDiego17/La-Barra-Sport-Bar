const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('sale', {
        total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        date: { type: DataTypes.DATE, allowNull: false },
    }, { timestamps: false });
};
