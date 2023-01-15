import { isRoverInBoundary } from "../roverDetails/roverChecks";
import { platLength, platWidth } from "../plateauDetails/Plateau";

describe("Checking if the Rover is moving within boundary", () => {
  test("returns false if Xcordinate < 0 ", () => {
    expect(isRoverInBoundary(-1, 2, platLength, platWidth)).toBe(false);
  });
  test("returns false if Xcoordinate > plateau length", () => {
    expect(isRoverInBoundary(15, 2, platLength, platWidth)).toBe(false);
  });
  test("returns false if Ycordinate < 0", () => {
    expect(isRoverInBoundary(1, -3, platLength, platWidth)).toBe(false);
  });

  test("returns false if Ycoordinate > plateau width", () => {
    expect(isRoverInBoundary(1, 20, platLength, platWidth)).toBe(false);
  });

  test("returns false if Xcoordinate < 0 Ycoordinate < 0", () => {
    expect(isRoverInBoundary(-1, -3, platLength, platWidth)).toBe(false);
  });

  test("returns false if Xcoordinate > platLength Ycoordinate > platWidth", () => {
    expect(isRoverInBoundary(15, 20, platLength, platWidth)).toBe(false);
  });

  test("returns true if Xcordinate > 0 ", () => {
    expect(isRoverInBoundary(1, 2, platLength, platWidth)).toBe(true);
  });
  test("returns true if Xcoordinate < plateau length", () => {
    expect(isRoverInBoundary(10, 2, platLength, platWidth)).toBe(true);
  });
  test("returns true for if Ycordinate > 0", () => {
    expect(isRoverInBoundary(1, 1, platLength, platWidth)).toBe(true);
  });
  test("returns true for if Ycoordinate < plateau width", () => {
    expect(isRoverInBoundary(1, 10, platLength, platWidth)).toBe(true);
  });
});
