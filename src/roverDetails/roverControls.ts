import { startMovingRover } from "./startMovingRover";
import { print, askQuestion, clear, onEnter } from "../helper/console";
import { checkKeysEntered } from "./roverChecks";
import { readRoverLocation, readPlateauGrid } from "../readWriteFile";
import { reset } from "../helper/reset";

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
    print("Enter M đ to move the Rover forward by one grid point");
    print("Enter R âĄī¸  to rotate the Rover 90 degrees right");
    print("Enter L âŦī¸  to rotate the Rover 90 degrees left");
    print("");
    print("----------------------------------------------");
    askQuestion(
      `Enter moves of ${this.roverName} eg: MLRMMLR âĄī¸  :`,
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
            `${this.roverName} đ  moved to đŠ đŠ đŠ  ( ${finalPositionOfRover} ) from initial position ( ${roverLocation} ) with moves đšī¸  ( ${ans} )`
          );
          print("");
          print("----------------------------------------------");
          print("");
          print("Press enter to start again đ ");
          print("");
          print("----------------------------------------------");
          print("");
          onEnter(() => reset());
        } else {
          clear();
          print("----------------------------------------------");
          print("");
          print(
            "Error đĨđĨđĨ : Keys are case sensitive and also check if you entered the correct keys - M, L or R!"
          );
          this.move();
        }
      }
    );
  }
}
