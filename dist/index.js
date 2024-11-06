"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = __importDefault(require("./settings"));
const app_1 = require("./app");
const PORT = settings_1.default.PORT;
app_1.app.listen(PORT, () => {
    console.log(`server uses ${PORT} port.`);
});
