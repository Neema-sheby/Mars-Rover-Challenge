import { Plateau } from "./plateauDetails/Plateau";
import { roverNameArray } from "./rovers/rovers";
import { RoverControls } from "./roverDetails/roverControls";
import { NUM_ROW, NUM_COL, GRID_GAP, ROVER_GAP_X, ROVER_GAP_Y } from "./config";
import { print, clear, askQuestion } from "./console";
import { Rover } from "./roverDetails/rover";

// Set the platform size
const plat1 = new Plateau(NUM_ROW, NUM_COL, GRID_GAP);
const platLength = plat1.getLength();
const platWidth = plat1.getWidth();

// Select the Rover to move
function selectRovers(): void {
  print("There are two Rovers in the plateau.");
  roverNameArray.forEach((rovName, i: number) =>
    print(`${i + 1} - ${rovName}`)
  );
  askQuestion("Select the Rovers to move 🚗 :", (ans: string) => {
    clear();
    print("----------------------------------------------");
    print(`You've selected Rover${ans}`);
    const rover = new Rover(`Rover${ans}`);
    rover.setInitialCoordinates();
  });
}
selectRovers();

// Move the selected Rover
export function moveRover(loc: any): void {
  if (loc.length === 3) {
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
