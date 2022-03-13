'use strict';

const sport = (sequelize, DataTypes) => sequelize.define('sport', {
    sportName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sportPopularity: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = sport;