export function checkIfNumbers(num: any): boolean {
  if (isNaN(num)) return false;
  else if (num === "") return false;
  else {
    return true;
  }
}

export function checkIfOrientation(dir: string): boolean {
  if (dir === "N") return true;
  else if (dir === "S") return true;
  else if (dir === "E") return true;
  else if (dir === "W") return true;
  else return false;
}
