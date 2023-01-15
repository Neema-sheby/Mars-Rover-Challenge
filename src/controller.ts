import { roverArray } from "./rovers/rovers";
import { print, clear, askQuestion } from "./console";
import {
  writeSelectedRoverName,
  writeIsRoverSelected,
  writeRoverLocation,
  readIsRoverSelected,
  writePlateauGrid,
  writeIsPlateauSet,
  ReadIsPlateauSet,
  readPlateauGrid,
} from "./readWriteFile";
import { checkGridData, checkIfNumbers } from "./roverDetails/roverChecks";
import { Rover } from "./roverDetails/rover";

//-------------------------------------------------------------------------------------

//Reset the files
writePlateauGrid("");
writeIsPlateauSet("false");
writeSelectedRoverName("");
writeRoverLocation("");
writeIsRoverSelected("false");

// Create the plateau Grid
function enterPlateauGrid(): void {
  print("");
  print("----------------------------------------------");
  print("");
  print("Welcome to Mars 😊 !");
  print("");
  print("----------------------------------------------");
  print("");
  askQuestion("Enter the plateau grid 🏞️  for Rover to move (eg: 10 8) ➡️  : ", (ans: string) => {
    if (checkGridData(ans)) {
      const platDataArr: string[] = ans.split(" ");
      if (checkIfNumbers(+platDataArr[0]) && checkIfNumbers(+platDataArr[1])) {
        writePlateauGrid(ans);
        writeIsPlateauSet("true");
        checkPlateauSet();
      } else {
        clear();
        print("----------------------------------------------");
        print("");
        print("Error 💥💥💥 : Please enter a valid number");
        print("");
        enterPlateauGrid();
      }
    } else {
      clear();
      print("----------------------------------------------");
      print("");
      print(
        "Error 💥💥💥 : Please enter a valid X coordinate and Y coordinate with spaces between!"
      );
      print("");
      enterPlateauGrid();
    }
  });
  print("");
}
enterPlateauGrid();

// Select the Rover to move
export function selectRovers(): void {
  print("");
  print("----------------------------------------------");
  print("");
  print(`Your Platform 🏞️   is  (${readPlateauGrid()})`);
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

// Set the Rover Location
function setRoverLocation(roverName: string): void {
  const isRoverSelected: string = readIsRoverSelected().replace(/\s+/g, "");

  roverArray.map((rov: Rover) => {
    if (rov.getName() === roverName && isRoverSelected === "true") {
      rov.setInitialCoordinates(roverName);
    }
  });
}

// Set the Rover Location
function checkPlateauSet(): void {
  const isPlateauSet: string = ReadIsPlateauSet().replace(/\s+/g, "");

  if (isPlateauSet === "true") {
    selectRovers();
  }
}
