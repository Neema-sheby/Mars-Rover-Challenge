const fs = require("fs");

//-------------------------------------------------------------------

// Write the plateau Grid
export function writePlateauGrid(content: string): void {
  fs.writeFileSync(`${__dirname}/plateauGrid.txt`, content);
}

// Read the plateau Grid
export function readPlateauGrid(): string {
  const textRead = fs.readFileSync(`${__dirname}/plateauGrid.txt`, "utf-8");
  return textRead;
}

//-------------------------------------------------------------------

// write if plateau grid is set
export function writeIsPlateauSet(content: string): void {
  fs.writeFileSync(`${__dirname}/isPlateauSet.txt`, content);
}

// Read if plateau grid is set
export function ReadIsPlateauSet(): string {
  const textRead = fs.readFileSync(`${__dirname}/isPlateauSet.txt`, "utf-8");
  return textRead;
}

//-------------------------------------------------------------------

// Write the selected Rover
export function writeSelectedRoverName(content: string): void {
  fs.writeFileSync(`${__dirname}/selectedRover.txt`, content);
}

// Read the selected Rover
export function readSelectedRoverName(): string {
  const textRead = fs.readFileSync(`${__dirname}/selectedRover.txt`, "utf-8");
  return textRead;
}

//-------------------------------------------------------------------

//Write the inputed Rover location
export function writeRoverLocation(content: string): void {
  fs.writeFileSync(`${__dirname}/roverLocation.txt`, content);
}

// Read the inputed Rover Location
export function readRoverLocation(): string {
  const textRead = fs.readFileSync(`${__dirname}/roverLocation.txt`, "utf-8");
  return textRead;
}

//-------------------------------------------------------------------

// Write (true/false) if Rover is selected
export function writeIsRoverSelected(content: string): void {
  fs.writeFileSync(`${__dirname}/isRoverSelected.txt`, content);
}

// Read if Rover is selected
export function readIsRoverSelected(): string {
  const textRead = fs.readFileSync(`${__dirname}/isRoverSelected.txt`, "utf-8");
  return textRead;
}
