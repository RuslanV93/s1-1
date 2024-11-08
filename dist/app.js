"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const settings_1 = __importDefault(require("./settings"));
const videosController_1 = require("./videos/videosController");
const db_1 = __importDefault(require("./db/db"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.get('/', (req, res) => {
    res.status(200).json({ version: '1.0' });
});
exports.app.delete('/testing/all-data', (req, res) => {
    db_1.default.videos = [];
    res.sendStatus(204);
});
exports.app.use(settings_1.default.PATH.VIDEOS, videosController_1.videoRouter);
