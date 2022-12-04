import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput
    .split("\n")
    .map((pair) =>
      pair.split(",").map((range) => range.split("-").map(Number)),
    );

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  // console.log(input);

  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i]; // PAIR

    const [aStart, aEnd] = a;
    const [bStart, bEnd] = b;

    const aLength = aEnd - aStart + 1;
    const bLength = bEnd - bStart + 1;

    const aArray = Array.apply(null, Array(aLength)).map(function (_, i) {
      return i + aStart;
    });

    const bArray = Array.apply(null, Array(bLength)).map(function (_, i) {
      return i + bStart;
    });

    // console.log(aArray, bArray);
    // console.log(
    //   aArray.every((num) => bArray.includes(num))
    //     ? 1
    //     : bArray.every((num) => aArray.includes(num))
    //     ? 1
    //     : 0,
    // );

    sum += aArray.every((num) => bArray.includes(num))
      ? 1
      : bArray.every((num) => aArray.includes(num))
      ? 1
      : 0;
  }

  return sum;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  // console.log(input);

  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i]; // PAIR

    const [aStart, aEnd] = a;
    const [bStart, bEnd] = b;

    const aLength = aEnd - aStart + 1;
    const bLength = bEnd - bStart + 1;

    const aArray = Array.apply(null, Array(aLength)).map(function (_, i) {
      return i + aStart;
    });

    const bArray = Array.apply(null, Array(bLength)).map(function (_, i) {
      return i + bStart;
    });

    // console.log(aArray, bArray);
    // console.log(
    //   aArray.every((num) => bArray.includes(num))
    //     ? 1
    //     : bArray.every((num) => aArray.includes(num))
    //     ? 1
    //     : 0,
    // );

    sum += aArray.some((num) => bArray.includes(num))
      ? 1
      : bArray.some((num) => aArray.includes(num))
      ? 1
      : 0;
  }

  return sum;
};

run({
  part1: {
    tests: [
      {
        input: `
        2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8
        `,
        expected: 2,
      },
      {
        input: `
          1-3,2-4
        `,
        expected: 0,
      },
      {
        input: `
          10-10,11-11
        `,
        expected: 0,
        name: "Hmm",
      },
      {
        input: `
          1-1,1-1
        `,
        expected: 1,
      },
      {
        input: `
          0-0,0-0
        `,
        expected: 1,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8
        `,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  // onlyTests: true,
});
