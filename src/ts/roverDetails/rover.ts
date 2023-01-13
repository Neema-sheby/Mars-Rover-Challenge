import { platLength, platWidth } from "../plateauDetails/Plateau";
import { checkIfNumbers, checkIfOrientation } from "./roverChecks";
import {
  writeRoverLocation,
  readRoverLocation,
  readSelectedRoverName,
} from "../readWriteFile";
import { RoverControls } from "./roverControls";
import { print, clear, askQuestion } from "../console";

export class Rover {
  private readonly location: any = [];

  public constructor(private name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public setInitialCoordinates(roverName: string): void {
    roverName = readSelectedRoverName();
    askQuestion(
      `Please enter the coordinates and orientation of Rover:`,
      (ans: string) => {
        const arr: string[] = ans.split("");

        if (checkIfNumbers(+arr[0])) {
          this.location.push(+arr[0]);
        } else {
          //clear();
          print("Enter a valid number");
          this.setInitialCoordinates(roverName);
        }

        if (checkIfNumbers(+arr[1])) {
          this.location.push(+arr[1]);
        } else {
          //clear();
          print("Enter a valid number");
          this.setInitialCoordinates(roverName);
        }

        if (checkIfOrientation(arr[2])) {
          this.location.push(arr[2]);

          // if (this.location.length === 3) {
          clear();
          print("----------------------------------------------");
          print("Now the Rover is ready to move 🚗 🚗 🚗 ");
          print("----------------------------------------------");
          print("Enter M 🚗 to move the Rover forward by one grid point");
          print("Enter R ➡️  to rotate the Rover 90 degrees right");
          print("Enter L ⬅️  to rotate the Rover 90 degrees left");
          writeRoverLocation(this.location.join(""));
          this.moveRover(this.location);
        } else {
          //clear();
          print("Enter a valid direction - N, S, E or W");
          this.setInitialCoordinates(roverName);
        }
      }
    );
  }
  // Move the selected Rover
  public moveRover(loc: any[]): void {
    const roverLoc: string[] = readRoverLocation()
      .replace(/\s+/g, "")
      .split("");
    if (roverLoc.length === 3) {
      const selectedRoverCtrl = new RoverControls(
        loc[0],
        loc[1],
        loc[2],
        platLength,
        platWidth
      );
      selectedRoverCtrl.move();
    }
  }
  public getLocation(): string[] {
    return this.location;
  }
}
