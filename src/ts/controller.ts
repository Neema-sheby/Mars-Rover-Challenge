import { roverArray } from "./rovers/rovers";
import { print, clear, askQuestion } from "./console";
import {
  writeSelectedRoverName,
  writeIsRoverSelected,
  writeRoverLocation,
  readIsRoverSelected,
} from "./readWriteFile";
import { checkIfNumbers } from "./roverDetails/roverChecks";
import { Rover } from "./roverDetails/rover";

//-------------------------------------------------------------------------------------

//Reset the files

writeSelectedRoverName("");
writeRoverLocation("");
writeIsRoverSelected("false");

// Select the Rover to move

export function selectRovers(): void {
  print("");
  print("----------------------------------------------");
  print("");
  print("Welcome to Mars 😊 !");
  print("");
  print("----------------------------------------------");
  print("");
  print("Select the Rover to move 🚗 from below :");
  print("");
  roverArray.forEach((rov, i: number) =>
    print(`${i + 1} - ${rov.getName()} 🚗 `)
  );
  print("");
  askQuestion("Enter the option number of Rover ➡️  : ", (ans: string) => {
    print("----------------------------------------------");
    if (checkIfNumbers(+ans) && +ans <= roverArray.length && +ans > 0) {
      clear();
      print("");
      print(`You've selected Rover${ans} 🚗 😊`);
      writeSelectedRoverName(`Rover${ans}`);
      writeIsRoverSelected("true");
      setRoverLocation(`Rover${ans}`);
    } else {
      clear();
      print("----------------------------------------------");
      print("");
      print(
        "Error 💥💥💥 : Please enter the correct option number to select Rover!"
      );
      print("");
      selectRovers();
    }
  });
}
selectRovers();

// Set the Rover Location
function setRoverLocation(roverName: string): void {
  const isRoverSelected: string = readIsRoverSelected().replace(/\s+/g, "");

  roverArray.map((rov: Rover) => {
    if (rov.getName() === roverName && isRoverSelected === "true") {
      rov.setInitialCoordinates(roverName);
    }
  });
}
