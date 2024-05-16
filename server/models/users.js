const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        name: { type: DataTypes.STRING, allowNull: false, },
        image: { type: DataTypes.TEXT, allowNull: false, },
        username: { type: DataTypes.STRING, allowNull: false, },
        email: { type: DataTypes.STRING, allowNull: false, },
        barReservation: { type: DataTypes.INTEGER, allowNull: false }
    }, { timestamps: false });
};