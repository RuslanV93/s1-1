"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideoById = void 0;
const db_1 = __importDefault(require("../db/db"));
const getVideoById = (req, res) => {
    const videos = db_1.default.videos;
    if (req.params.id) {
        const videoById = videos.filter((v) => v.id === +req.params.id);
        if (!videoById) {
            res.status(404);
            return;
        }
        res.status(200).json(videoById);
    }
};
exports.getVideoById = getVideoById;
