import { readPlateauGrid } from "../readWriteFile";

const plateauGrid: string = readPlateauGrid();
export const plateauLength: number = +plateauGrid.split(" ")[0];
export const plateauWidth: number = +plateauGrid.split(" ")[1];
