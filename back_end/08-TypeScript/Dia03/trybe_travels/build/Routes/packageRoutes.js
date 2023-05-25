"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var packageController_1 = __importDefault(require("../controllers/packageController"));
var packageRouter = (0, express_1.Router)();
packageRouter.patch('/packages/:id', packageController_1.default.updatePackage);
packageRouter.delete('/packages/:id', packageController_1.default.deletePackage);
exports.default = packageRouter;
