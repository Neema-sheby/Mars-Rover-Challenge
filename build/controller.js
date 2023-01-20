"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectRovers = void 0;
const rovers_1 = require("./rovers/rovers");
const console_1 = require("./console");
const readWriteFile_1 = require("./readWriteFile");
const roverChecks_1 = require("./roverDetails/roverChecks");
//-------------------------------------------------------------------------------------
//Reset the files
(0, readWriteFile_1.writePlateauGrid)("");
(0, readWriteFile_1.writeIsPlateauSet)("false");
(0, readWriteFile_1.writeSelectedRoverName)("");
(0, readWriteFile_1.writeRoverLocation)("");
(0, readWriteFile_1.writeIsRoverSelected)("false");
// Create the plateau Grid
function enterPlateauGrid() {
    (0, console_1.print)("");
    (0, console_1.print)("----------------------------------------------");
    (0, console_1.print)("");
    (0, console_1.print)("Welcome to Mars 😊 !");
    (0, console_1.print)("");
    (0, console_1.print)("----------------------------------------------");
    (0, console_1.print)("");
    (0, console_1.askQuestion)("Enter the plateau grid 🏞️  for Rover to move (eg: 10 8) ➡️  : ", (ans) => {
        if ((0, roverChecks_1.checkGridData)(ans)) {
            const platDataArr = ans.split(" ");
            if ((0, roverChecks_1.checkIfNumbers)(+platDataArr[0]) &&
                (0, roverChecks_1.checkIfNumbers)(+platDataArr[1])) {
                (0, readWriteFile_1.writePlateauGrid)(ans);
                (0, readWriteFile_1.writeIsPlateauSet)("true");
                checkPlateauSet();
            }
            else {
                (0, console_1.clear)();
                (0, console_1.print)("----------------------------------------------");
                (0, console_1.print)("");
                (0, console_1.print)("Error 💥💥💥 : Please enter a valid number");
                (0, console_1.print)("");
                enterPlateauGrid();
            }
        }
        else {
            (0, console_1.clear)();
            (0, console_1.print)("----------------------------------------------");
            (0, console_1.print)("");
            (0, console_1.print)("Error 💥💥💥 : Please enter a valid X coordinate and Y coordinate with spaces between!");
            (0, console_1.print)("");
            enterPlateauGrid();
        }
    });
    (0, console_1.print)("");
}
enterPlateauGrid();
// Select the Rover to move
function selectRovers() {
    (0, console_1.print)("");
    (0, console_1.print)("----------------------------------------------");
    (0, console_1.print)("");
    (0, console_1.print)(`Your Plateau upper right coordinates 🏞️   are  (${(0, readWriteFile_1.readPlateauGrid)()})`);
    (0, console_1.print)("");
    (0, console_1.print)("----------------------------------------------");
    (0, console_1.print)("");
    (0, console_1.print)("Select the Rover to move 🚗 from below :");
    (0, console_1.print)("");
    rovers_1.roverArray.forEach((rov, i) => (0, console_1.print)(`${i + 1} - ${rov.getName()} 🚗 `));
    (0, console_1.print)("");
    (0, console_1.askQuestion)("Enter the option number of Rover ➡️  : ", (ans) => {
        (0, console_1.print)("----------------------------------------------");
        if ((0, roverChecks_1.checkIfNumbers)(+ans) && +ans <= rovers_1.roverArray.length && +ans > 0) {
            (0, console_1.clear)();
            (0, console_1.print)("");
            (0, console_1.print)(`You've selected Rover${ans} 🚗 😊`);
            (0, readWriteFile_1.writeSelectedRoverName)(`Rover${ans}`);
            (0, readWriteFile_1.writeIsRoverSelected)("true");
            setRoverLocation(`Rover${ans}`);
        }
        else {
            (0, console_1.clear)();
            (0, console_1.print)("----------------------------------------------");
            (0, console_1.print)("");
            (0, console_1.print)("Error 💥💥💥 : Please enter the correct option number to select Rover!");
            (0, console_1.print)("");
            selectRovers();
        }
    });
}
exports.selectRovers = selectRovers;
// Set the Rover Location
function setRoverLocation(roverName) {
    const isRoverSelected = (0, readWriteFile_1.readIsRoverSelected)().replace(/\s+/g, "");
    rovers_1.roverArray.map((rov) => {
        if (rov.getName() === roverName && isRoverSelected === "true") {
            rov.setInitialCoordinates(roverName);
        }
    });
}
// Set the Rover Location
function checkPlateauSet() {
    const isPlateauSet = (0, readWriteFile_1.ReadIsPlateauSet)().replace(/\s+/g, "");
    if (isPlateauSet === "true") {
        selectRovers();
    }
}
