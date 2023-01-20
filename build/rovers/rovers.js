"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roverArray = exports.roverNameArray = void 0;
const rover_1 = require("../roverDetails/rover");
//-------------------------------------------------------------------------------------
// Assuming two Rovers are landed on the Mar's plateau
// Below is the array containing the names of Rovers in the plateau
exports.roverNameArray = ["Rover1", "Rover2"];
exports.roverArray = exports.roverNameArray.map((name) => new rover_1.Rover(name));
