
import { roverArray } from "./rovers/rovers";
import { print, clear, askQuestion } from "./console";
import { Rover } from "./roverDetails/rover";
import {
  writeSelectedRoverName,
  writeIsRoverSelected,
  writeRoverLocation,
  readIsRoverSelected,
  readRoverLocation,
} from "./readWriteFile";


// Select the Rover to move
writeSelectedRoverName("");
writeRoverLocation("");
writeIsRoverSelected("false");

function selectRovers(): void {
  print("There are two Rovers in the plateau.");
  roverArray.forEach((rov, i: number) => print(`${i + 1} - ${rov.getName()}`));
  askQuestion("Select the Rovers to move 🚗 :", (ans: string) => {
    clear();
    print("----------------------------------------------");
    print(`You've selected Rover${ans}`);
    writeSelectedRoverName(`Rover${ans}`);
    writeIsRoverSelected("true");
    setRoverLocation(`Rover${ans}`);
  });
}
selectRovers();

// Set the Rover Location
function setRoverLocation(roverName: string): void {
  const isRoverSelected: string = readIsRoverSelected().replace(/\s+/g, "");

  roverArray.map((rov, i) => {
    if (rov.getName() === roverName && isRoverSelected === "true") {
      rov.setInitialCoordinates(roverName);
    }
  });
}
