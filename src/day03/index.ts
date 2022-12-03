import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput
    .split("\n")
    .map((line) => [
      line.substring(0, line.length / 2),
      line.substring(line.length / 2),
    ])
    .map((compartmentStr) =>
      compartmentStr.map((compartment) =>
        compartment.split("").reduce((acc: Compartment, curr: string) => {
          acc[curr] = (acc[curr] || 0) + 1;
          return acc;
        }, {}),
      ),
    );

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 97),
).concat(Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)));

const getPriority = (letter: string): number => {
  return alphabet.indexOf(letter) + 1;
};

const findUnionKey = (a: Compartment, b: Compartment) => {
  return Object.keys(a).find((key) => b[key]);
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return input.reduce((acc, [a, b]) => {
    const unionKey = findUnionKey(a, b);

    return acc + getPriority(unionKey!);
  }, 0);

  console.log(findUnionKey(input[0][0], input[0][1]));

  console.log(alphabet);

  return;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      {
        input: `
        vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
        `,
        expected: 157,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
        `,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});

type Compartment = {
  [key: string]: number;
};
