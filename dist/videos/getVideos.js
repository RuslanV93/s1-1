"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideos = void 0;
const db_1 = __importDefault(require("../db/db"));
const getVideos = (req, res) => {
    const videos = db_1.default.videos;
    res.status(200).send(videos);
};
exports.getVideos = getVideos;
