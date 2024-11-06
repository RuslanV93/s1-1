"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVideo = void 0;
const updateVideoValidation_1 = require("../validation/updateVideoValidation");
const newVideoValidation_1 = require("../validation/newVideoValidation");
const db_1 = __importDefault(require("../db/db"));
const updateVideo = (req, res) => {
    const videoId = +req.params.id;
    const video = db_1.default.videos.find((video) => video.id === videoId);
    const errorsArray = [];
    (0, newVideoValidation_1.titleValidation)(req.body.title, errorsArray);
    (0, newVideoValidation_1.authorValidation)(req.body.author, errorsArray);
    (0, newVideoValidation_1.availableResolutionValidator)(req.body.availableResolution, errorsArray);
    (0, updateVideoValidation_1.updateVideoValidation)(req.body, errorsArray);
    if (!video) {
        res.status(404).json({ message: 'Video not found' });
        return;
    }
    if (errorsArray.length > 0) {
        res.status(400).json({ errorsMessages: [...errorsArray] });
        return;
    }
    db_1.default.videos = db_1.default.videos.map((video) => {
        if (video.id === videoId) {
            return Object.assign(Object.assign({}, video), req.body);
        }
        return video;
    });
    res.sendStatus(204);
};
exports.updateVideo = updateVideo;
