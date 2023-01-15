import { startMovingRover } from "../roverDetails/startMovingRover";
import { TEST_UPPER_RIGHT_COORD_X, TEST_UPPER_RIGHT_COORD_Y } from "../config";

describe("Checking if Rover can rotate and move ", () => {
  const plateauLength = TEST_UPPER_RIGHT_COORD_X;
  const plateauWidth = TEST_UPPER_RIGHT_COORD_Y;
  test("Rover can move one step forward", () => {
    expect(startMovingRover("M", 1, 2, "N", plateauLength, plateauWidth)).toBe(
      "1 3 N"
    );
  });

  test("Rover can rotate left", () => {
    expect(startMovingRover("L", 1, 2, "N", plateauLength, plateauWidth)).toBe(
      "1 2 W"
    );
  });
  test("Rover can rotate right", () => {
    expect(startMovingRover("R", 1, 2, "N", plateauLength, plateauWidth)).toBe(
      "1 2 E"
    );
  });
  test("Rover can rotate left and move", () => {
    expect(startMovingRover("LM", 1, 2, "N", plateauLength, plateauWidth)).toBe(
      "0 2 W"
    );
  });
  test("Rover can rotate right and move", () => {
    expect(startMovingRover("RM", 1, 2, "N", plateauLength, plateauWidth)).toBe(
      "2 2 E"
    );
  });
  test("Rover can move several steps forward", () => {
    expect(
      startMovingRover("MMMMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("1 7 N");
  });
  test("Rover can make complex steps", () => {
    expect(
      startMovingRover("MMLLMRRR", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("1 3 E");
  });
  test("Rover stops moving when it reaches north edge of plateau", () => {
    expect(
      startMovingRover("MMMMMMMMMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("1 8 N");
  });
  test("Rover stops moving when it reaches south edge of plateau", () => {
    expect(
      startMovingRover("RRMMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("1 0 S");
  });
  test("Rover stops moving when it reaches east edge of plateau", () => {
    expect(
      startMovingRover("RMMMMMMMMMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("10 2 E");
  });
  test("Rover stops moving when it reaches west edge of plateau", () => {
    expect(
      startMovingRover("LMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("0 2 W");
  });
  test("Rover stops when it reaches edge of north boundary and move east along boundary", () => {
    expect(
      startMovingRover("MMMMMMMMMMRMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("3 8 E");
  });
  test("Rover stops when it reaches edge of north boundary and move west along boundary", () => {
    expect(
      startMovingRover("MMMMMMMMMMLMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("0 8 W");
  });

  test("Rover can stop when it reaches edge of south boundary and move east along boundary", () => {
    expect(
      startMovingRover("LLMMMMMLMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("3 0 E");
  });

  test("Rover can stop when it reaches edge of south boundary and move west along boundary", () => {
    expect(
      startMovingRover("LLMMMMMRMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("0 0 W");
  });
  test("Rover can stop when it reaches edge of east boundary and move north along boundary", () => {
    expect(
      startMovingRover("RMMMMMMMMMMLMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("10 4 N");
  });
  test("Rover can stop when it reaches edge of east boundary and move south along boundary", () => {
    expect(
      startMovingRover("RMMMMMMMMMMRMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("10 0 S");
  });
  test("Rover can stop when it reaches edge of west boundary and move north along boundary", () => {
    expect(
      startMovingRover("LMMMMRMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("0 4 N");
  });
  test("Rover can stop when it reaches edge of west boundary and move south along boundary", () => {
    expect(
      startMovingRover("LMMMMLMM", 1, 2, "N", plateauLength, plateauWidth)
    ).toBe("0 0 S");
  });
});
