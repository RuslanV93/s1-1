"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideoById = void 0;
const db_1 = __importDefault(require("../db/db"));
// @ts-ignore
const getVideoById = (req, res) => {
    const videos = db_1.default.videos;
    if (req.params.id) {
        const videoById = videos.find((v) => v.id === +req.params.id);
        if (!videoById) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(videoById);
    }
};
exports.getVideoById = getVideoById;
