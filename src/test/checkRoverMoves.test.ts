import { startMovingRover } from "../roverDetails/startMovingRover";
import { PLATEAU_TEST_LENGTH, PLATEAU_TEST_WIDTH } from "../config";

describe("Checking if Rover can rotate and move ", () => {
  const plateauLength = PLATEAU_TEST_LENGTH;
  const plateauWidth = PLATEAU_TEST_WIDTH;
  test("Rover can move one step forward", () => {
    expect(startMovingRover("M", 1, 2, "N", plateauLength, plateauWidth)).toBe(
      "13N"
    );
  });

  test("Rover can rotate left", () => {
    expect(startMovingRover("L", 1, 2, "N", plateauLength, plateauWidth)).toBe(
      "12W"
    );
  });
  test("Rover can rotate right", () => {
    expect(startMovingRover("R", 1, 2, "N", plateauLength, plateauWidth)).toBe(
      "12E"
    );
  });
  test("Rover can rotate left and move", () => {
    expect(startMovingRover("LM", 1, 2, "N", plateauLength, plateauWidth)).toBe(
      "02W"
    );
  });
  test("Rover can rotate right and move", () => {
    expect(startMovingRover("RM", 1, 2, "N", plateauLength, plateauWidth)).toBe(
      "22E"
    );
  });
  test("Rover can move several steps forward", () => {
    expect(
      startMovingRover("MMMMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("17N");
  });
  test("Rover can make complex steps", () => {
    expect(
      startMovingRover("MMLLMRRR", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("13E");
  });
  test("Rover stops moving when it reaches north edge of plateau", () => {
    expect(
      startMovingRover("MMMMMMMMMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("18N");
  });
  test("Rover stops moving when it reaches south edge of plateau", () => {
    expect(
      startMovingRover("RRMMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("10S");
  });
  test("Rover stops moving when it reaches east edge of plateau", () => {
    expect(
      startMovingRover("RMMMMMMMMMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("102E");
  });
  test("Rover stops moving when it reaches west edge of plateau", () => {
    expect(
      startMovingRover("LMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("02W");
  });
  test("Rover stops when it reaches edge of north boundary and move east along boundary", () => {
    expect(
      startMovingRover("MMMMMMMMMMRMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("38E");
  });
  test("Rover stops when it reaches edge of north boundary and move west along boundary", () => {
    expect(
      startMovingRover("MMMMMMMMMMLMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("08W");
  });

  test("Rover can stop when it reaches edge of south boundary and move east along boundary", () => {
    expect(
      startMovingRover("LLMMMMMLMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("30E");
  });

  test("Rover can stop when it reaches edge of south boundary and move west along boundary", () => {
    expect(
      startMovingRover("LLMMMMMRMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("00W");
  });
  test("Rover can stop when it reaches edge of east boundary and move north along boundary", () => {
    expect(
      startMovingRover("RMMMMMMMMMMLMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("104N");
  });
  test("Rover can stop when it reaches edge of east boundary and move south along boundary", () => {
    expect(
      startMovingRover("RMMMMMMMMMMRMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("100S");
  });
  test("Rover can stop when it reaches edge of west boundary and move north along boundary", () => {
    expect(
      startMovingRover("LMMMMRMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("04N");
  });
  test("Rover can stop when it reaches edge of west boundary and move south along boundary", () => {
    expect(
      startMovingRover("LMMMMLMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("00S");
  });
});
