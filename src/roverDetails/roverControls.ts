import { startMovingRover } from "./startMovingRover";
import { print, askQuestion, clear, startAgain } from "../console";
import { checkKeysEntered } from "./roverChecks";
import { readRoverLocation } from "../readWriteFile";
import { reset } from "../reset";

//-------------------------------------------------------------------------------------

// Controls to move Rover
export class RoverControls {
  private newLocation: any = [];
  constructor(
    private roverName: string,
    private cordX: number,
    private cordY: number,
    private dir: string,
    private platLength: number,
    private platWidth: number
  ) {
    this.cordX = this.cordX;
    this.cordY = this.cordY;
    this.dir = this.dir;
    this.platLength = platLength;
    this.platWidth = platWidth;
  }

  public move(): void {
    const roverLocation = readRoverLocation();
    print("");
    print("----------------------------------------------");
    print("");
    print("Enter M 🚗 to move the Rover forward by one grid point");
    print("Enter R ➡️  to rotate the Rover 90 degrees right");
    print("Enter L ⬅️  to rotate the Rover 90 degrees left");
    print("");
    print("----------------------------------------------");
    askQuestion(
      `Enter moves of ${this.roverName} eg: MLRMMLR ➡️  :`,
      (ans: string) => {
        if (checkKeysEntered(ans)) {
          //----------------------------------------------
          const finalPositionOfRover = startMovingRover(
            ans,
            this.cordX,
            this.cordY,
            this.dir,
            this.platLength,
            this.platWidth
          );
          clear();
          print("");
          print("----------------------------------------------");
          print("");
          console.log(
            `${this.roverName} 🚗  moved to 🚩 🚩 🚩  ( ${finalPositionOfRover} ) from initial position ( ${roverLocation} ) with moves 🕹️  ( ${ans} )`
          );
          print("");
          print("----------------------------------------------");
          print("");
          print("Press enter to start again 😊 ");
          print("");
          print("----------------------------------------------");
          print("");
          startAgain(() => reset());
        } else {
          clear();
          print("----------------------------------------------");
          print("");
          print(
            "Error 💥💥💥 : Keys are case sensitive and also check if you entered the correct keys - M, L or R!"
          );
          this.move();
        }
      }
    );
  }
}
