import run from "aocrunner";

function splitByLength(str: string, length: number) {
  const result = [];
  while (str.length > 0) {
    result.push(str.substring(0, length));
    str = str.substring(length);
  }
  return result;
}

// function that rotates a 2d array 90 degrees clockwise
function rotate2dArray(arr: any[][]) {
  const result: any[] = [];
  for (let i = 0; i < arr[0].length; i++) {
    result.push([]);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result[j].push(arr[i][j]);
    }
  }
  return result;
}

function parseInstruction(instruction: string) {
  const [amount, ...args] = instruction.split("from");
  return {
    amount: Number(amount.split("move")[1]),
    from: Number(args[0].split("to")[0]) - 1,
    to: Number(args[0].split("to")[1]) - 1,
  };
}

const parseInput = (rawInput: string) =>
  rawInput.split("\n\n").map((l, idx, arr) => {
    if (idx === 0) {
      const boxConfigArr = l.split("\n");
      const boxColLength = Math.max(
        ...boxConfigArr[boxConfigArr.length - 1]
          .split("   ")
          .map((n) => Number(n)),
      );

      let test = rotate2dArray(
        boxConfigArr.slice(0, -1).map((row) => {
          return splitByLength(row, Math.ceil(row.length / boxColLength)).map(
            (l) => {
              if (l.trim() === "") return undefined;
              return l.trim().split("")[1];
            },
          );
        }),
      ).map((row) =>
        row.reverse().filter((n: string | undefined) => n !== undefined),
      );

      // console.log(test);

      return test;
    }

    return l.split("\n");
  });

const part1 = (rawInput: string) => {
  const [boxConfiguration, instructions] = parseInput(rawInput);

  for (let instruction of instructions) {
    const { amount, from, to } = parseInstruction(instruction);

    for (let i = 0; i < amount; i++) {
      boxConfiguration[to].push(boxConfiguration[from].pop());
    }
  }

  return boxConfiguration
    .reduce((acc, row) => {
      return [...acc, row.pop()];
    }, [])
    .join("");
};

const part2 = (rawInput: string) => {
  const [boxConfiguration, instructions] = parseInput(rawInput);

  for (let instruction of instructions) {
    const { amount, from, to } = parseInstruction(instruction);

    boxConfiguration[to].push(...boxConfiguration[from].splice(-amount));
  }

  return boxConfiguration
    .reduce((acc, row) => {
      return [...acc, row.pop()];
    }, [])
    .join("");
};

run({
  part1: {
    tests: [],
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
