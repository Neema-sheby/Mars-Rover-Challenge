import { Rover } from "../roverDetails/rover";
// Assuming Rovers are parked somewhere in the platform
export const roverNameArray: string[] = ["Rover1", "Rover2"];

export const roverArray: Rover[] = roverNameArray.map(
  (name) => new Rover(name)
);
