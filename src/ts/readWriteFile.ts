const fs = require("fs");

//-------------------------------------------------------------------

// Write the selected Rover
export function writeSelectedRoverName(content: string): void {
  fs.writeFileSync(`${__dirname}/files/selectedRover.txt`, content);
  //console.log("File has been written");
}

// Read the selected Rover
export function readSelectedRoverName(): string {
  const textRead = fs.readFileSync(
    `${__dirname}/files/selectedRover.txt`,
    "utf-8"
  );
 // console.log("file is read");
  return textRead;
}

//-------------------------------------------------------------------

//Write the inputed Rover location
export function writeRoverLocation(content: string): void {
  fs.writeFileSync(`${__dirname}/files/roverLocation.txt`, content);
 // console.log("File has been written");
}

// Read the inputed Rover Location
export function readRoverLocation(): string {
  const textRead = fs.readFileSync(
    `${__dirname}/files/roverLocation.txt`,
    "utf-8"
  );
  //console.log("file is read");
  return textRead;
}

//-------------------------------------------------------------------
export function writeIsRoverSelected(content: string): void {
  fs.writeFileSync(`${__dirname}/files/isRoverSelected.txt`, content);
  //console.log("File has been written");
}

// Read the inputed Rover Location
export function readIsRoverSelected(): string {
  const textRead = fs.readFileSync(
    `${__dirname}/files/isRoverSelected.txt`,
    "utf-8"
  );
  //console.log("file is read");
  return textRead;
}
