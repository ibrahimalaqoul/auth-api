'use strict';

const image = (sequelize, DataTypes) => sequelize.define('image', {
    imglink: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgcolor: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = image;