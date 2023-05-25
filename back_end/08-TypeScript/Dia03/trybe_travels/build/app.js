"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var packageRoutes_1 = __importDefault(require("./Routes/packageRoutes"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', function (_req, res) {
    res.status(200).send('Aplicação está funcionando!');
});
app.use(packageRoutes_1.default);
exports.default = app;
