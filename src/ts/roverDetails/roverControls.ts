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
    let x: number = this.cordX;
    let y: number = this.cordY;
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
      `Enter moves of ${this.roverName} eg: MLRMMLR :`,
      (ans: string) => {
        if (checkKeysEntered(ans)) {
          const nav: string[] = ans.split("");
          nav.forEach((key) => {
            if (key === "M") {
              if (this.dir === "N" && this.cordY >= 0) {
                y += 1;
                if (this.isRoverInBoundary(x, y)) {
                  this.cordY = y;
                } else {
                  y = this.cordY;
                }
              } else if (this.dir === "E" && this.cordX <= this.platWidth) {
                x += 1;
                if (this.isRoverInBoundary(x, y)) {
                  this.cordX = x;
                } else {
                  x = this.cordX;
                }
              } else if (this.dir === "S" && this.cordY <= this.platWidth) {
                y -= 1;
                if (this.isRoverInBoundary(x, y)) {
                  this.cordY = y;
                } else {
                  y = this.cordY;
                }
              } else if (this.dir === "W" && this.cordX >= 0) {
                x -= 1;
                if (this.isRoverInBoundary(x, y)) {
                  this.cordX = x;
                } else {
                  x = this.cordX;
                }
              }
            }
            if (key === "R") {
              if (this.dir === "N") this.dir = "E";
              else if (this.dir === "E") this.dir = "S";
              else if (this.dir === "S") this.dir = "W";
              else if (this.dir === "W") this.dir = "N";
            }
            if (key === "L") {
              if (this.dir === "N") this.dir = "W";
              else if (this.dir === "W") this.dir = "S";
              else if (this.dir === "S") this.dir = "E";
              else if (this.dir === "E") this.dir = "N";
              0;
            }
          });
          clear();
          print("");
          print("----------------------------------------------");
          print("");
          console.log(
            `${this.roverName} 🚗  moved to 🚩 🚩 🚩  ( ${[
              this.cordX,
              this.cordY,
              this.dir,
            ].join(
              ""
            )} ) from initial position ( ${roverLocation} ) with moves 🕹️  ( ${ans} )`
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

  public isRoverInBoundary(x: number, y: number): Boolean {
    if (x > this.platLength || y > this.platWidth || x < 0 || y < 0)
      return false;
    else return true;
  }
}
