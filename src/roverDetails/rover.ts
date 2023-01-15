import { platLength, platWidth } from "../plateauDetails/Plateau";
import {
  checkIfAllDataEntered,
  checkIfNumbers,
  checkIfOrientation,
} from "./roverChecks";
import {
  writeRoverLocation,
  readRoverLocation,
  readSelectedRoverName,
} from "../readWriteFile";
import { RoverControls } from "./roverControls";
import { print, clear, askQuestion } from "../console";

// export const roverNameArray: string[] = ["Rover1", "Rover2"];

// export const roverArray: Rover[] = roverNameArray.map(
//   (name) => new Rover(name)
// );

//-------------------------------------------------------------------------------------

//Create the Rover
export class Rover {
  private readonly location: any = [];
  private dataEntered: boolean = false;

  public constructor(private name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  // Set the Rover coordinates
  public setInitialCoordinates(roverName: string): void {
    print("");
    print("----------------------------------------------");
    print("");
    writeRoverLocation("");
    roverName = readSelectedRoverName();
    this.location.length = 0;
    askQuestion(
      `Enter the coordinates and orientation of ${roverName} 🚗 (✅ eg: 12N - Here 1 is the x coordinate, 2 is the y coordinate and N is the orientation) ➡️  : `,
      (ans: string) => {
        if (checkIfAllDataEntered(ans)) {
          const arr: string[] = ans.split("");

          if (checkIfNumbers(+arr[0])) {
            this.dataEntered = true;
            this.location.push(+arr[0]);
          } else {
            //clear();
            print("");
            print("----------------------------------------------");
            print("");
            print("Error 💥💥💥 : Enter a valid number for the X coordinate");
            this.setInitialCoordinates(roverName);
            this.dataEntered = false;
          }
          if (this.dataEntered) {
            if (checkIfNumbers(+arr[1])) {
              this.dataEntered = true;
              this.location.push(+arr[1]);
            } else {
              //clear();
              print("");
              print("----------------------------------------------");
              print("");
              print("Error 💥💥💥 : Enter a valid number for the Y coordinate");
              this.setInitialCoordinates(roverName);
              this.dataEntered = false;
            }
          }
          if (this.dataEntered) {
            if (checkIfOrientation(arr[2])) {
              this.dataEntered = true;
              this.location.push(arr[2]);
              clear();
              print("");
              print("----------------------------------------------");
              print("");
              print(`Now ${roverName} is ready to move 🚗 🚗 🚗 `);
              writeRoverLocation(this.location.join(""));
              this.moveRover(this.location, roverName);
            } else {
              // clear();
              print("");
              print("----------------------------------------------");
              print("");
              print("Error 💥💥💥 : Enter a valid direction 🧭 - N, S, E or W");
              this.setInitialCoordinates(roverName);
              this.dataEntered = false;
            }
          }
        } else {
          clear();
          print("");
          print("----------------------------------------------");
          print("");
          print(
            "Error 💥💥💥 : Please enter valid coordinates and orientation ! (✅ eg: 12N - Here 1 is the x coordinate, 2 is the y coordinate and N is the orientation)"
          );
          this.setInitialCoordinates(roverName);
        }
      }
    );
  }

  // Move the selected Rover
  public moveRover(loc: any[], roverName: string): void {
    const roverLoc: string[] = readRoverLocation()
      .replace(/\s+/g, "")
      .split("");
    if (roverLoc.length === 3) {
      const selectedRoverCtrl = new RoverControls(
        roverName,
        loc[0],
        loc[1],
        loc[2],
        platLength,
        platWidth
      );
      selectedRoverCtrl.move();
    }
  }
}