import { checkIfNumbers } from "../roverDetails/roverChecks";

describe("Checking if the coordinates entered are numbers", () => {
  test("returns false for empty coordinates", () => {
    expect(checkIfNumbers("")).toBe(false);
  });
  test("returns false for entering punctuations", () => {
    expect(checkIfNumbers(",")).toBe(false);
  });
  test("returns false for entering space", () => {
    expect(checkIfNumbers(" ")).toBe(false);
  });

  test("returns false for entering alphabets", () => {
    expect(checkIfNumbers("abc")).toBe(false);
  });
  test("returns false for entering NULL", () => {
    expect(checkIfNumbers(null)).toBe(false);
  });
  test("returns true for entering single digit numbers", () => {
    expect(checkIfNumbers(1)).toBe(true);
  });
  test("returns true for entering large numbers", () => {
    expect(checkIfNumbers(12345)).toBe(true);
  });
});
