import { isRoverInBoundary } from "../roverDetails/roverChecks";
import { PLATEAU_TEST_LENGTH, PLATEAU_TEST_WIDTH } from "../config";

describe("Checking if the Rover is moving within boundary", () => {
  const plateauLength = PLATEAU_TEST_LENGTH;
  const plateauWidth = PLATEAU_TEST_WIDTH;
  test("returns false if Xcordinate < 0 ", () => {
    expect(isRoverInBoundary(-1, 2, plateauLength, plateauWidth)).toBe(false);
  });
  test("returns false if Xcoordinate > plateau length", () => {
    expect(isRoverInBoundary(15, 2, plateauLength, plateauWidth)).toBe(false);
  });
  test("returns false if Ycordinate < 0", () => {
    expect(isRoverInBoundary(1, -3, plateauLength, plateauWidth)).toBe(false);
  });

  test("returns false if Ycoordinate > plateau width", () => {
    expect(isRoverInBoundary(1, 20, plateauLength, plateauWidth)).toBe(false);
  });

  test("returns false if Xcoordinate < 0 Ycoordinate < 0", () => {
    expect(isRoverInBoundary(-1, -3, plateauLength, plateauWidth)).toBe(false);
  });

  test("returns false if Xcoordinate > platLength Ycoordinate > platWidth", () => {
    expect(isRoverInBoundary(15, 20, plateauLength, plateauWidth)).toBe(false);
  });

  test("returns true if Xcordinate > 0 ", () => {
    expect(isRoverInBoundary(1, 2, plateauLength, plateauWidth)).toBe(true);
  });
  test("returns true if Xcoordinate < plateau length", () => {
    expect(isRoverInBoundary(10, 2, plateauLength, plateauWidth)).toBe(true);
  });
  test("returns true for if Ycordinate > 0", () => {
    expect(isRoverInBoundary(1, 1, plateauLength, plateauWidth)).toBe(true);
  });
  test("returns true for if Ycoordinate < plateau width", () => {
    expect(isRoverInBoundary(1, 7, plateauLength, plateauWidth)).toBe(true);
  });
});
