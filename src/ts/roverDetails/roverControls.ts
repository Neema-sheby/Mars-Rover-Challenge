import { print, askQuestion } from "../console";

// Controls to move Rover
export class RoverControls {
  private newLocation: any = [];
  constructor(
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

    print("----------------------------------------------");
    askQuestion("Enter Rover moves eg: MLRMMLR :", (ans: string) => {
      const nav: string[] = ans.split("");
      nav.forEach((key) => {
        if (key === "M" || key === "m") {
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
        if (key === "L" || key === "l") {
          if (this.dir === "N") this.dir = "E";
          else if (this.dir === "E") this.dir = "S";
          else if (this.dir === "S") this.dir = "W";
          else if (this.dir === "W") this.dir = "N";
        }
        if (key === "R" || key === "r") {
          if (this.dir === "N") this.dir = "W";
          else if (this.dir === "W") this.dir = "S";
          else if (this.dir === "S") this.dir = "E";
          else if (this.dir === "E") this.dir = "N";
          0;
        }
      });
      console.log(`(${[this.cordX, this.cordY, this.dir].join("")}) `);
    });
  }

  public isRoverInBoundary(x: number, y: number): Boolean {
    if (x > this.platLength || y > this.platWidth || x < 0 || y < 0)
      return false;
    else return true;
  }
}
