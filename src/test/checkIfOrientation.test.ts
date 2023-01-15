import { checkIfOrientation } from "../roverDetails/roverChecks";

describe("Checking if the orientation entered are N, S, E or W", () => {
  test("returns false for empty coordinates", () => {
    expect(checkIfOrientation("")).toBe(false);
  });
  test("returns false for entering punctuations", () => {
    expect(checkIfOrientation(",")).toBe(false);
  });
  test("returns false for entering space", () => {
    expect(checkIfOrientation(" ")).toBe(false);
  });

  test("returns false for entering space between digit numbers", () => {
    expect(checkIfOrientation("1 2")).toBe(false);
  });

  test("returns false for entering alphabets other than N, S, E or W", () => {
    expect(checkIfOrientation("abc")).toBe(false);
  });
});
