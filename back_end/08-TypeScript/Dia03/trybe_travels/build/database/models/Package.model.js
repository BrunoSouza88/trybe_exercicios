"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var index_1 = __importDefault(require("./index"));
var PackageModel = index_1.default.define('PackageModel', {
    destination: sequelize_1.DataTypes.STRING,
    category: sequelize_1.DataTypes.STRING,
    price: sequelize_1.DataTypes.DECIMAL,
}, {
    tableName: 'packages',
    timestamps: false,
    underscored: true,
});
exports.default = PackageModel;
