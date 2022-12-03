import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput.split("\n\n").map((group) => group.split("\n"));

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  console.log(input);

  return input.reduce((acc, group) => {
    const sum = group.reduce((acc, amt) => acc + parseInt(amt), 0);

    if (sum > acc) return sum;
    return acc;
  }, 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const sWindow = [0, 0, 0];

  for (let i = 0; i < input.length; i++) {
    const group = input[i];

    const sum = group.reduce((acc, amt) => acc + parseInt(amt), 0);

    if (sWindow.some((v) => v < sum)) {
      sWindow[sWindow.indexOf(Math.min(...sWindow))] = sum;
      continue;
    }
  }

  return sWindow.reduce((acc, v) => acc + v, 0);
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
          1000
          2000
          3000

          4000

          5000
          6000

          7000
          8000
          9000

          10000
        `,
        expected: "24000",
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
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: true,
});
