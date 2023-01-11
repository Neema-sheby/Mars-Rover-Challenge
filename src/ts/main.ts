import { Rover } from "./rover";
// import { drawRover } from "../drawRover";
const rover1 = new Rover(false, false, []);
rover1.setInitialCoordinateX();
export function getRoverLocation(loc: string[]): void {
  const x = loc[0];
  const y = loc[1];
  const dir = loc[2];
  console.log(loc);
}
