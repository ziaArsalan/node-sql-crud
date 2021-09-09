'use strict'

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        id: {
            type          : DataTypes.INTEGER(11),
            autoIncrement : true,
            primaryKey    : true,
            allowNull     : false,
            unique        : true,
        },
        name      : DataTypes.STRING,
        is_active : DataTypes.BOOLEAN,
        email     : DataTypes.STRING
    }, {
        tableName: 'user',
        timestamps: true,
        underscored: true,
    });
    // user.sync({force: true})

    return user;
};