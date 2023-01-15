import { startMovingRover } from "./startMovingRover";
import { print, askQuestion, clear, onEnter } from "../console";
import { checkKeysEntered } from "./roverChecks";
import { readRoverLocation, readPlateauGrid } from "../readWriteFile";
import { reset } from "../reset";

//-------------------------------------------------------------------------------------

// Controls to move Rover
export class RoverControls {
  private newLocation: any = [];
  private plateauLength: number = +readPlateauGrid().split(" ")[0];
  private plateauWidth: number = +readPlateauGrid().split(" ")[1];
  constructor(
    private roverName: string,
    private cordX: number,
    private cordY: number,
    private dir: string
  ) {
    this.cordX = this.cordX;
    this.cordY = this.cordY;
    this.dir = this.dir;
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
            this.plateauLength,
            this.plateauWidth
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
          onEnter(() => reset());
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
