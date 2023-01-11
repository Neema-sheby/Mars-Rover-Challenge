import { roverChecks } from "./roverChecks";
import { moveRover } from "./controller";
import { print,clear, askQuestion } from "./console";

const RoverTest = new roverChecks();

export class Rover {
  private readonly location: string[] = [];

  public setInitialCoordinateX(): void {
    print("Welcome to Mars");
    askQuestion("Please enter the X coordinate of Rover :", (ans: any) => {
      if (RoverTest.checkIfNumbers(ans)) {
        this.location.push(ans);
        this.setInitialCoordinateY();
      } else {
        //clear();
        print("Enter a valid number");
        this.setInitialCoordinateX();
      }
    });
  }

  public setInitialCoordinateY(): void {
    // clear();
    askQuestion("Please enter the Y coordinate of Rover :", (ans: any) => {
      if (RoverTest.checkIfNumbers(ans)) {
        this.location.push(ans);
        this.setInitialOrientation();
      } else {
        //clear();
        print("Enter a valid number");
        this.setInitialCoordinateY();
      }
    });
  }

  public setInitialOrientation(): void {
    // clear();
    askQuestion(
      "Please enter the direction the Rover is facing :",
      (ans: string) => {
        if (RoverTest.checkIfOrientation(ans)) {
          this.location.push(ans);
          moveRover(this.location);
          clear();
          print("----------------------------------------------");
          print("Now the Rover is ready to move 🚗 🚗 🚗 ");
          print("----------------------------------------------");
          print("Enter M 🚗 to move the Rover forward by one grid point");
          print("Enter R ➡️  to rotate the Rover 90 degrees right");
          print("Enter L ⬅️  to rotate the Rover 90 degrees left");
          print("----------------------------------------------");
        } else {
          //clear();
          print("Enter a valid direction - N, S, E or W");
          this.setInitialOrientation();
        }
      }
    );
  }
  public getLocation(): string[] {
    return this.location;
  }
}
