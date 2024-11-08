"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideo = void 0;
const db_1 = __importDefault(require("../db/db"));
const newVideoValidation_1 = require("../validation/newVideoValidation");
const validationTypes_1 = require("../validation/validationTypes");
const createVideo = (req, res) => {
    const errorsArray = [];
    const { title, author, availableResolutions } = req.body;
    console.log(req.body);
    (0, newVideoValidation_1.titleValidation)(title, errorsArray);
    (0, newVideoValidation_1.authorValidation)(author, errorsArray);
    (0, newVideoValidation_1.availableResolutionValidator)(availableResolutions, errorsArray);
    if (errorsArray.length > 0) {
        res.status(400).json({ errorsMessages: [...errorsArray] });
        return;
    }
    const newVideo = {
        author: author,
        availableResolutions: availableResolutions || Object.values(validationTypes_1.Resolutions),
        canBeDownloaded: false,
        createdAt: new Date().toISOString(),
        id: Date.now(),
        minAgeRestriction: null,
        publicationDate: (function () {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrow.toISOString();
        })(),
        title: title,
    };
    db_1.default.videos = [...db_1.default.videos, newVideo];
    res.status(201).send(newVideo);
};
exports.createVideo = createVideo;
