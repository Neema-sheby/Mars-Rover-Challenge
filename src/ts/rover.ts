import { RoverManagement } from "./roverManagement";
import { getRoverLocation } from "./main";
import { print, askQuestion } from "./console";

const RManagement = new RoverManagement();

export class Rover {

  public constructor(
    private isMoving: Boolean,
    private isReady: Boolean,
    private location: string[]
  ) {
    this.location = location;
    this.isMoving = isMoving;
    this.isReady = isReady;
  }

  public setInitialCoordinateX(): void {
    print("Welcome to Mars");
    askQuestion("Please enter the X coordinate of Rover :", (ans: any) => {
      if (RManagement.checkIfNumbers(ans)) {
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
      if (RManagement.checkIfNumbers(ans)) {
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
        if (RManagement.checkIfOrientation(ans)) {
          this.location.push(ans);
          getRoverLocation(this.location)
        } else {
          //clear();
          print("Enter a valid direction - N, S, E or W");
          this.setInitialOrientation();
        }
      }
    );
  }

}
