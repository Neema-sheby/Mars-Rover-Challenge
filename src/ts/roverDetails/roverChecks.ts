// Checking if the x coordinates and y coordinates are number
export function checkIfAllDataEntered(loc: string): boolean {
  const locArr = loc.split("");
  if (locArr.length === 3) {
    return true;
  } else return false;
}

// Checking if the x coordinates and y coordinates are number
export function checkIfNumbers(num: any): boolean {
  if (isNaN(num)) return false;
  else if (num === "") return false;
  else {
    return true;
  }
}

// Checking if the orientation entered are N,S,E or W
export function checkIfOrientation(dir: string): boolean {
  if (dir === "N") return true;
  else if (dir === "S") return true;
  else if (dir === "E") return true;
  else if (dir === "W") return true;
  else return false;
}

export function checkKeysEntered(keys: string): boolean {
  if (keys.match(/[A-KN-QS-Za-z]/gm)) {
    return false;
  } else return true;
}
