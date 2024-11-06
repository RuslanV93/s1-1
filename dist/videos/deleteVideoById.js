"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVideoById = void 0;
const db_1 = __importDefault(require("../db/db"));
const deleteVideoById = (req, res) => {
    const videoId = +req.params.id;
    const videoIndex = db_1.default.videos.findIndex((v) => v.id === videoId);
    if (videoIndex === -1) {
        res.status(404).json({ message: 'Video not found.' });
    }
    db_1.default.videos.filter((video) => video.id !== videoId);
    res.sendStatus(204);
};
exports.deleteVideoById = deleteVideoById;
