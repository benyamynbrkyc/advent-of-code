const fs = require('fs');

const getInput = () => {
  const data = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' });
  return data;
};

const main = () => {
  const input = getInput();

  const elves = [];

  input.split(/\n\s*\n/).forEach((elf) => {
    const caloriesByElf = elf.split(/\r?\n/).map((c) => parseInt(c));
    elves.push(caloriesByElf.reduce((acc, cv) => acc + cv, 0));
  });

  console.log(
    elves
      .sort((a, b) => b - a)
      .splice(0, 3)
      .reduce((acc, cv) => acc + cv, 0)
  );
};

main();
