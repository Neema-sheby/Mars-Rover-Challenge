import { checkIfAllDataEntered } from "../roverDetails/roverChecks";

describe("Checking if all the data (coordinates and orientation) are entered", () => {
  test("returns false for empty data", () => {
    expect(checkIfAllDataEntered("")).toBe(false);
  });
  test("returns false for entering coordinates only", () => {
    expect(checkIfAllDataEntered("1 2")).toBe(false);
  });
  test("returns false for entering orientation only", () => {
    expect(checkIfAllDataEntered("N")).toBe(false);
  });
  test("returns false for entering one coordinate and orientation", () => {
    expect(checkIfAllDataEntered("1 N")).toBe(false);
  });
  test("returns false for entering strings containing more than three characters", () => {
    expect(checkIfAllDataEntered("3 2 N N N")).toBe(false);
  });
  test("returns true for entering all three data", () => {
    expect(checkIfAllDataEntered("3 2 N")).toBe(true);
  });
});
