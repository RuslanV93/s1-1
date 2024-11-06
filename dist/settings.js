"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const SETTINGS = {
    PORT: process.env.PORT || 3004,
    PATH: {
        DEFAULT: '/',
        VIDEOS: '/videos',
        VIDEO_BY_ID: '/videos/:id'
    }
};
exports.default = SETTINGS;
