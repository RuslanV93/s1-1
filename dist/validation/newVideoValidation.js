"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.availableResolutionValidator = exports.authorValidation = exports.titleValidation = void 0;
const validationTypes_1 = require("./validationTypes");
const titleValidation = (title, errorsArray) => {
    if (!title) {
        errorsArray.push({ field: 'title', message: 'no title' });
        return;
    }
    if (typeof title !== 'string') {
        errorsArray.push({ field: 'title', message: 'title must be a string' });
        return;
    }
    if (title && title.trim().length > 40) {
        errorsArray.push({
            message: 'title length must be less than 40 symbols',
            field: 'title',
        });
    }
};
exports.titleValidation = titleValidation;
const authorValidation = (author, errorsArray) => {
    if (!author) {
        errorsArray.push({ field: 'author', message: 'no author' });
        return;
    }
    if (typeof author !== 'string') {
        errorsArray.push({ field: 'author', message: 'author must be a string' });
        return;
    }
    if (author && author.trim().length > 20) {
        errorsArray.push({
            message: 'author length must be less than 20 symbols',
            field: 'author',
        });
    }
};
exports.authorValidation = authorValidation;
const availableResolutionValidator = (availableResolution, errorsArray) => {
    if (!Array.isArray(availableResolution)) {
        errorsArray.push({
            message: 'exist not valid value',
            field: 'availableResolutions',
        });
        return;
    }
    if (availableResolution && availableResolution.length > 0) {
        availableResolution.forEach((res) => {
            if (!Object.keys(validationTypes_1.Resolutions).includes(res)) {
                errorsArray.push({
                    message: 'exist not valid value',
                    field: 'availableResolutions',
                });
            }
        });
    }
};
exports.availableResolutionValidator = availableResolutionValidator;
