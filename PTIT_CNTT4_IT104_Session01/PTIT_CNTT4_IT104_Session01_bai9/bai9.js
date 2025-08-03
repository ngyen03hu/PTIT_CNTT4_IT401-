const a = [1, 2, 3, 5, 9];
const b = [4, 6, 7, 8];
const newArray = [...a, ...b];
const absort = [...newArray].sort((a, b) => a - b);
console.log(absort);
