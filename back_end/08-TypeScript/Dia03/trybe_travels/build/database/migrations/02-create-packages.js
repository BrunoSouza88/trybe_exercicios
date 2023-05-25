"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.default = {
    up: function (queryInterface) {
        return queryInterface.createTable('packages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
            },
            destination: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            category: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            price: {
                allowNull: false,
                type: sequelize_1.DataTypes.FLOAT,
            }
        });
    },
    down: function (queryInterface) {
        return queryInterface.dropTable('users');
    }
};
