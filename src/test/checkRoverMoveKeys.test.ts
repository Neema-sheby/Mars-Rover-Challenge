import { checkKeysEntered } from "../roverDetails/roverChecks";

describe("Checking if the correct rover move keys M, L or R is entered", () => {
  test("returns false for empty moves", () => {
    expect(checkKeysEntered("")).toBe(false);
  });

  test("returns false for entering space", () => {
    expect(checkKeysEntered(" ")).toBe(false);
  });
  test("returns false for entering alphabets other than M,L or R", () => {
    expect(checkKeysEntered("ABCM")).toBe(false);
  });
  test("returns false for entering numbers", () => {
    expect(checkKeysEntered("123")).toBe(false);
  });
  test("returns false for entering m", () => {
    expect(checkKeysEntered("m")).toBe(false);
  });
  test("returns false for entering l", () => {
    expect(checkKeysEntered("l")).toBe(false);
  });
  test("returns false for entering r", () => {
    expect(checkKeysEntered("r")).toBe(false);
  });
  test("returns true for entering M", () => {
    expect(checkKeysEntered("M")).toBe(true);
  });
  test("returns true for entering L", () => {
    expect(checkKeysEntered("L")).toBe(true);
  });
  test("returns true for entering R", () => {
    expect(checkKeysEntered("R")).toBe(true);
  });
  test("returns true for entering small moves", () => {
    expect(checkKeysEntered("MMLR")).toBe(true);
  });
  test("returns true for entering multiple moves", () => {
    expect(checkKeysEntered("MMLRMMMLRRR")).toBe(true);
  });
  test("returns true for rotating moves", () => {
    expect(checkKeysEntered("LRLRLR")).toBe(true);
  });
});
