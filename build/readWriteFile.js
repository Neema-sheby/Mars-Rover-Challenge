"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readIsRoverSelected = exports.writeIsRoverSelected = exports.readRoverLocation = exports.writeRoverLocation = exports.readSelectedRoverName = exports.writeSelectedRoverName = exports.ReadIsPlateauSet = exports.writeIsPlateauSet = exports.readPlateauGrid = exports.writePlateauGrid = void 0;
const fs = require("fs");
//-------------------------------------------------------------------
// Write the plateau Grid
function writePlateauGrid(content) {
    fs.writeFileSync(`${__dirname}/files/plateauGrid.txt`, content);
}
exports.writePlateauGrid = writePlateauGrid;
// Read the plateau Grid
function readPlateauGrid() {
    const textRead = fs.readFileSync(`${__dirname}/files/plateauGrid.txt`, "utf-8");
    return textRead;
}
exports.readPlateauGrid = readPlateauGrid;
//-------------------------------------------------------------------
// write if plateau grid is set
function writeIsPlateauSet(content) {
    fs.writeFileSync(`${__dirname}/files/isPlateauSet.txt`, content);
}
exports.writeIsPlateauSet = writeIsPlateauSet;
// Read if plateau grid is set
function ReadIsPlateauSet() {
    const textRead = fs.readFileSync(`${__dirname}/files/isPlateauSet.txt`, "utf-8");
    return textRead;
}
exports.ReadIsPlateauSet = ReadIsPlateauSet;
//-------------------------------------------------------------------
// Write the selected Rover
function writeSelectedRoverName(content) {
    fs.writeFileSync(`${__dirname}/files/selectedRover.txt`, content);
}
exports.writeSelectedRoverName = writeSelectedRoverName;
// Read the selected Rover
function readSelectedRoverName() {
    const textRead = fs.readFileSync(`${__dirname}/files/selectedRover.txt`, "utf-8");
    return textRead;
}
exports.readSelectedRoverName = readSelectedRoverName;
//-------------------------------------------------------------------
//Write the inputed Rover location
function writeRoverLocation(content) {
    fs.writeFileSync(`${__dirname}/files/roverLocation.txt`, content);
}
exports.writeRoverLocation = writeRoverLocation;
// Read the inputed Rover Location
function readRoverLocation() {
    const textRead = fs.readFileSync(`${__dirname}/files/roverLocation.txt`, "utf-8");
    return textRead;
}
exports.readRoverLocation = readRoverLocation;
//-------------------------------------------------------------------
// Write (true/false) if Rover is selected
function writeIsRoverSelected(content) {
    fs.writeFileSync(`${__dirname}/files/isRoverSelected.txt`, content);
}
exports.writeIsRoverSelected = writeIsRoverSelected;
// Read if Rover is selected
function readIsRoverSelected() {
    const textRead = fs.readFileSync(`${__dirname}/files/isRoverSelected.txt`, "utf-8");
    return textRead;
}
exports.readIsRoverSelected = readIsRoverSelected;