import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("");

function isUniqueString(str: string) {
  return str.split("").every((letter, i, arr) => {
    return arr.every((l, j) => {
      if (l === undefined) return false;
      if (i === j) return true;
      return l !== letter;
    });
  });
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let letterBuffer: (string | undefined)[] = input.splice(0, 4);

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (isUniqueString(letterBuffer.join(""))) {
      return i + 4;
      return letterBuffer.join("");
    }

    letterBuffer = [...letterBuffer.slice(1, 4), letter];
  }

  return letterBuffer.join("");

  return;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let letterBuffer: (string | undefined)[] = input.splice(0, 14);

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (isUniqueString(letterBuffer.join(""))) {
      return i + 14;
      return letterBuffer.join("");
    }

    letterBuffer = [...letterBuffer.slice(1, 14), letter];
  }

  return letterBuffer.join("");
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
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
  // onlyTests: true,
});
