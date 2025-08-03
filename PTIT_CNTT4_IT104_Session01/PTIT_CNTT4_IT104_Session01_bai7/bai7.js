const sumArray = (...arr) => {
    return arr.map(arr => arr.reduce((sum, num) => sum + num, 0));
};

const result = sumArray([1, 2], [6, 7, 8], [12, 8]);
console.log(result); 