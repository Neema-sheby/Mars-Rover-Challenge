import { Rover } from "../roverDetails/rover";

//-------------------------------------------------------------------------------------

// Assuming Rovers are parked somewhere in the platform
// Below is the array containing the names of Rovers in the plateau
export const roverNameArray: string[] = ["Rover1", "Rover2"];

export const roverArray: Rover[] = roverNameArray.map(
  (name) => new Rover(name)
);
