"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validationTypes_1 = require("../validation/validationTypes");
const db = {
    videos: [
        {
            id: 1,
            title: 't' + Date.now() + Math.random(),
            author: 'a' + Date.now() + Math.random(),
            canBeDownloaded: true,
            minAgeRestriction: 2,
            createdAt: new Date().toISOString(),
            publicationDate: new Date().toISOString(),
            availableResolution: [validationTypes_1.Resolutions.P240],
        },
    ],
};
exports.default = db;
