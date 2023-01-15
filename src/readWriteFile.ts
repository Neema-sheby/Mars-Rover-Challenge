const fs = require("fs");

//-------------------------------------------------------------------

// Write the selected Rover
export function writeSelectedRoverName(content: string): void {
  fs.writeFileSync(`${__dirname}/files/selectedRover.txt`, content);
}

// Read the selected Rover
export function readSelectedRoverName(): string {
  const textRead = fs.readFileSync(
    `${__dirname}/files/selectedRover.txt`,
    "utf-8"
  );
  return textRead;
}

//-------------------------------------------------------------------

//Write the inputed Rover location
export function writeRoverLocation(content: string): void {
  fs.writeFileSync(`${__dirname}/files/roverLocation.txt`, content);
}

// Read the inputed Rover Location
export function readRoverLocation(): string {
  const textRead = fs.readFileSync(
    `${__dirname}/files/roverLocation.txt`,
    "utf-8"
  );
  return textRead;
}

//-------------------------------------------------------------------

// Write (true/false) if Rover is selected
export function writeIsRoverSelected(content: string): void {
  fs.writeFileSync(`${__dirname}/files/isRoverSelected.txt`, content);
}

// Read if Rover is selected
export function readIsRoverSelected(): string {
  const textRead = fs.readFileSync(
    `${__dirname}/files/isRoverSelected.txt`,
    "utf-8"
  );
  return textRead;
}
