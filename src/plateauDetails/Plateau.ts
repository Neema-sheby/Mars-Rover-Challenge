import { NUM_ROW, NUM_COL, GRID_GAP } from "../config";

//-------------------------------------------------------------------------------------

//Create the Plateau grid

export class Plateau {
  public constructor(
    public numRow: number,
    public numCol: number,
    public gridGap: number
  ) {
    this.numRow = numRow;
    this.numCol = numCol;
    this.gridGap = gridGap;
  }

  public getLength(): number {
    return this.numRow * this.gridGap;
  }
  public getWidth(): number {
    return this.numCol * this.gridGap;
  }
}

// Set the Plateau size
export const plat1: Plateau = new Plateau(NUM_ROW, NUM_COL, GRID_GAP);
export const platLength: number = plat1.getLength();
export const platWidth: number = plat1.getWidth();
