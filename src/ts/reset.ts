import { clear } from "./console";
import { selectRovers } from "./controller";

//----------------------------------------------------------------

//reset;
export function reset(): void {
  clear()
  selectRovers();
}
