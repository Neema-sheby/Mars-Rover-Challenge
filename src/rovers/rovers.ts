import { Rover } from "../roverDetails/rover";

//-------------------------------------------------------------------------------------

// Assuming two Rovers are landed on the Mar's plateau
// Below is the array containing the names of Rovers in the plateau
export const roverNameArray: string[] = ["Rover1", "Rover2"];

export const roverArray: Rover[] = roverNameArray.map(
  (name) => new Rover(name)
);
