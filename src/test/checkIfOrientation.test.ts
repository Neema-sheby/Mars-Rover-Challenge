import { checkIfOrientation } from "../roverDetails/roverChecks";

describe("Checking if the orientation entered are N, S, E or W", () => {
  test("returns false for empty directions", () => {
    expect(checkIfOrientation("")).toBe(false);
  });
  test("returns false for entering punctuations", () => {
    expect(checkIfOrientation(",")).toBe(false);
  });
  test("returns false for entering space", () => {
    expect(checkIfOrientation(" ")).toBe(false);
  });

  test("returns false for entering numbers", () => {
    expect(checkIfOrientation("12")).toBe(false);
  });

  test("returns false for entering small letters other than N, S, E or W", () => {
    expect(checkIfOrientation("abc")).toBe(false);
  });

  test("returns false for entering capital letters other than N, S, E or W", () => {
    expect(checkIfOrientation("ABC")).toBe(false);
  });

  test("returns false for entering small letters of directions - N", () => {
    expect(checkIfOrientation("n")).toBe(false);
  });

  test("returns false for entering small letters of directions - S", () => {
    expect(checkIfOrientation("s")).toBe(false);
  });
  test("returns false for entering small letters of directions - E", () => {
    expect(checkIfOrientation("e")).toBe(false);
  });

  test("returns false for entering small letters of directions - W", () => {
    expect(checkIfOrientation("w")).toBe(false);
  });

  test("returns true for entering N for north direction", () => {
    expect(checkIfOrientation("N")).toBe(true);
  });

  test("returns true for entering S for south direction", () => {
    expect(checkIfOrientation("S")).toBe(true);
  });
  test("returns true for entering E for east direction", () => {
    expect(checkIfOrientation("E")).toBe(true);
  });

  test("returns true for entering W for west direction", () => {
    expect(checkIfOrientation("W")).toBe(true);
  });
});
