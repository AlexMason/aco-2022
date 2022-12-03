import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const getMappings = (): Map<string, number> => {
  // new map
  const mappings = new Map();

  // X for Rock, Y for Paper, and Z for Scissors
  // A for Rock, B for Paper, and C for Scissors
  // 1 for Rock, 2 for Paper, and 3 for Scissors
  // 0 if you lost, 3 if the round was a draw, and 6 if you won
  mappings.set("A X", 4); // 3 + 1
  mappings.set("A Y", 8); // 6 + 2
  mappings.set("A Z", 3); // 3 + 0
  mappings.set("B X", 1); // 0 + 1
  mappings.set("B Y", 5); // 3 + 2
  mappings.set("B Z", 9); // 6 + 3
  mappings.set("C X", 7); // 6 + 1
  mappings.set("C Y", 2); // 0 + 2
  mappings.set("C Z", 6); // 3 + 3

  return mappings;
};

const getMappings2 = (): Map<string, number> => {
  // new map
  const mappings = new Map();

  // A for Rock, B for Paper, and C for Scissors
  // X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win.
  // 1 for Rock, 2 for Paper, and 3 for Scissors
  // 0 if you lost, 3 if the round was a draw, and 6 if you won
  mappings.set("A X", 3); // 3 + 1
  mappings.set("A Y", 4); // 6 + 2
  mappings.set("A Z", 8); // 3 + 0
  mappings.set("B X", 1); // 0 + 1
  mappings.set("B Y", 5); // 3 + 2
  mappings.set("B Z", 9); // 6 + 3
  mappings.set("C X", 2); // 6 + 1
  mappings.set("C Y", 6); // 0 + 2
  mappings.set("C Z", 7); // 3 + 3

  return mappings;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let mappings = getMappings();

  return input
    .map((hands) => {
      return mappings.get(hands);
    })
    .reduce((a, b) => (a || 0) + (b || 0), 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let mappings = getMappings2();

  return input
    .map((hands) => {
      return mappings.get(hands);
    })
    .reduce((a, b) => (a || 0) + (b || 0), 0);
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
      {
        input: `
          A Y
          B X
          C Z
        `,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
      {
        input: `
          A Y
          B X
          C Z
        `,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
