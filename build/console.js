"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onEnter = exports.askQuestion = exports.clear = exports.print = void 0;
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//----------------------------------------------------------------
function print(str) {
    console.log(str);
}
exports.print = print;
function clear() {
    console.clear();
}
exports.clear = clear;
function askQuestion(ques, callback) {
    rl.question(ques, callback);
}
exports.askQuestion = askQuestion;
function onEnter(callback) {
    rl.on("line", callback);
}
exports.onEnter = onEnter;
