const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        name: { type: DataTypes.STRING, allowNull: false, },
        image: { type: DataTypes.TEXT, allowNull: false, },
        email: { type: DataTypes.STRING, allowNull: false, },
        isAdmin: { type: DataTypes.BOOLEAN }
    }, { timestamps: false });
};
