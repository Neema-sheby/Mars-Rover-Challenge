import { RoverControls } from "../roverDetails/roverControls";
import { platLength, platWidth } from "../plateauDetails/Plateau";

describe("Checking if Rover can rotate and move ", () => {
  const roverCtrl = new RoverControls(
    "Rover1",
    1,
    2,
    "N",
    platLength,
    platWidth
  );

  test("Rover can move one step forward", () => {
    expect(
      roverCtrl.startMovingRover("M", 1, 2, "N", platLength, platWidth)
    ).toBe("13N");
  });

  test("Rover can rotate left", () => {
    expect(
      roverCtrl.startMovingRover("L", 1, 2, "N", platLength, platWidth)
    ).toBe("12W");
  });
  test("Rover can rotate right", () => {
    expect(
      roverCtrl.startMovingRover("R", 1, 2, "N", platLength, platWidth)
    ).toBe("12E");
  });
  test("Rover can rotate left and move", () => {
    expect(
      roverCtrl.startMovingRover("LM", 1, 2, "N", platLength, platWidth)
    ).toBe("02W");
  });
  test("Rover can rotate right and move", () => {
    expect(
      roverCtrl.startMovingRover("RM", 1, 2, "N", platLength, platWidth)
    ).toBe("22E");
  });
  test("Rover can move several steps forward", () => {
    expect(
      roverCtrl.startMovingRover("MMMMM", 1, 2, "N", platLength, platWidth)
    ).toBe("17N");
  });
  test("Rover can make complex steps", () => {
    expect(
      roverCtrl.startMovingRover("MMLLMRRR", 1, 2, "N", platLength, platWidth)
    ).toBe("13E");
  });
  test("Rover stops moving when it reaches north edge of plateau", () => {
    expect(
      roverCtrl.startMovingRover("MMMMMMMMMM", 1, 2, "N", platLength, platWidth)
    ).toBe("110N");
  });
  test("Rover stops moving when it reaches south edge of plateau", () => {
    expect(
      roverCtrl.startMovingRover("RRMMM", 1, 2, "N", platLength, platWidth)
    ).toBe("10S");
  });
  test("Rover stops moving when it reaches east edge of plateau", () => {
    expect(
      roverCtrl.startMovingRover(
        "RMMMMMMMMMM",
        1,
        2,
        "N",
        platLength,
        platWidth
      )
    ).toBe("102E");
  });
  test("Rover stops moving when it reaches west edge of plateau", () => {
    expect(
      roverCtrl.startMovingRover("LMM", 1, 2, "N", platLength, platWidth)
    ).toBe("02W");
  });
  test("Rover can stop when it reaches edge of north boundary and move east along boundary", () => {
    expect(
      roverCtrl.startMovingRover(
        "MMMMMMMMMMRMM",
        1,
        2,
        "N",
        platLength,
        platWidth
      )
    ).toBe("310E");
  });
  test("Rover can stop when it reaches edge of north boundary and move west along boundary", () => {
    expect(
      roverCtrl.startMovingRover(
        "MMMMMMMMMMLMM",
        1,
        2,
        "N",
        platLength,
        platWidth
      )
    ).toBe("010W");
  });

  test("Rover can stop when it reaches edge of south boundary and move east along boundary", () => {
    expect(
      roverCtrl.startMovingRover("LLMMMMMLMM", 1, 2, "N", platLength, platWidth)
    ).toBe("30E");
  });

  test("Rover can stop when it reaches edge of south boundary and move west along boundary", () => {
    expect(
      roverCtrl.startMovingRover("LLMMMMMRMM", 1, 2, "N", platLength, platWidth)
    ).toBe("00W");
  });
  test("Rover can stop when it reaches edge of east boundary and move north along boundary", () => {
    expect(
      roverCtrl.startMovingRover(
        "RMMMMMMMMMMLMM",
        1,
        2,
        "N",
        platLength,
        platWidth
      )
    ).toBe("104N");
  });
  test("Rover can stop when it reaches edge of east boundary and move south along boundary", () => {
    expect(
      roverCtrl.startMovingRover(
        "RMMMMMMMMMMRMM",
        1,
        2,
        "N",
        platLength,
        platWidth
      )
    ).toBe("100S");
  });
  test("Rover can stop when it reaches edge of west boundary and move north along boundary", () => {
    expect(
      roverCtrl.startMovingRover("LMMMMRMM", 1, 2, "N", platLength, platWidth)
    ).toBe("04N");
  });
  test("Rover can stop when it reaches edge of west boundary and move south along boundary", () => {
    expect(
      roverCtrl.startMovingRover("LMMMMLMM", 1, 2, "N", platLength, platWidth)
    ).toBe("00S");
  });
});


