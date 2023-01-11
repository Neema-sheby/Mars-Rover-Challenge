import { Plateau } from "./Plateau";
import { Rover } from "./rover";
import { RoverControls } from "./roverControls";
import { NUM_ROW, NUM_COL, GRID_GAP } from "./config";
import { print, clear, askQuestion } from "./console";

const plat1 = new Plateau(NUM_ROW, NUM_COL, GRID_GAP);
const rover1 = new Rover();

const platLength = plat1.getLength();
const platWidth = plat1.getWidth();
rover1.setInitialCoordinateX();

export function moveRover(loc: any): void {
  if (rover1 && loc.length === 3) {
    const rover1Ctrl = new RoverControls(
      rover1,
      loc[0],
      loc[1],
      loc[2],
      platLength,
      platWidth
    );
    rover1Ctrl.move();
  }
}
