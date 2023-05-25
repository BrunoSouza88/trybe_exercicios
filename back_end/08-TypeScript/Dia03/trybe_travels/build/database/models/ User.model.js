"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var index_1 = __importDefault(require("./index"));
var UserModel = index_1.default.define('User', {
    email: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING,
    name: sequelize_1.DataTypes.STRING,
}, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
});
exports.default = UserModel;
