const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  let suffix = "th";
  if (number === 1 || number === 2 || number === 3) {
    suffix = number === 1 ? "st" : (number === 2 ? "nd" : "rd");
  }
  console.log(`${number}${suffix}`);
}
