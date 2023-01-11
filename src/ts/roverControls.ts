import { Rover } from "./rover";

export class RoverControls {
  constructor(
    private rover: Rover,
    private cordX: string,
    private cordY: string,
    private dir: string
  ) {
    this.rover = new Rover();
    this.cordX = this.cordX;
    this.cordY = this.cordY;
    this.dir = this.dir;
  }

  public move() {
    
  }
}
