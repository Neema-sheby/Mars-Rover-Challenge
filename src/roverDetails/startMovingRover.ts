import { isRoverInBoundary } from "./roverChecks";

//-------------------------------------------------------------------------------------

export function startMovingRover(
  moves: string,
  cordX: number,
  cordY: number,
  dir: string,
  plateauLength: number,
  plateauWidth: number
): string {
  let x: number = cordX;
  let y: number = cordY;

  const nav: string[] = moves.split("");
  nav.forEach((key) => {
    if (key === "M") {
      if (dir === "N" && cordY < plateauWidth) {
        y += 1;
        if (isRoverInBoundary(x, y, plateauLength, plateauWidth)) {
          cordY = y;
        } else {
          y = cordY;
        }
      } else if (dir === "E" && cordX < plateauLength) {
        x += 1;
        if (isRoverInBoundary(x, y, plateauLength, plateauWidth)) {
          cordX = x;
        } else {
          x = cordX;
        }
      } else if (dir === "S" && cordY > 0) {
        y -= 1;
        if (isRoverInBoundary(x, y, plateauLength, plateauWidth)) {
          cordY = y;
        } else {
          y = cordY;
        }
      } else if (dir === "W" && cordX > 0) {
        x -= 1;
        if (isRoverInBoundary(x, y, plateauLength, plateauWidth)) {
          cordX = x;
        } else {
          x = cordX;
        }
      }
    }
    if (key === "R") {
      if (dir === "N") dir = "E";
      else if (dir === "E") dir = "S";
      else if (dir === "S") dir = "W";
      else if (dir === "W") dir = "N";
    }
    if (key === "L") {
      if (dir === "N") dir = "W";
      else if (dir === "W") dir = "S";
      else if (dir === "S") dir = "E";
      else if (dir === "E") dir = "N";
      0;
    }
  });
  return [cordX, cordY, dir].join(" ");
}
