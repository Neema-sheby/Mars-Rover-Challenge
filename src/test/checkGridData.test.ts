import { checkGridData } from "../roverDetails/roverChecks";

describe("Checking if proper grid data is entered", () => {
  test("returns false for empty data", () => {
    expect(checkGridData("")).toBe(false);
  });
  test("returns false for entering less than three data", () => {
    expect(checkGridData("5")).toBe(false);
  });

  test("returns false for entering strings containing more than two characters", () => {
    expect(checkGridData("3 2 N N N")).toBe(false);
  });
  test("returns true for entering all three data", () => {
    expect(checkGridData("3 2")).toBe(true);
  });
});
