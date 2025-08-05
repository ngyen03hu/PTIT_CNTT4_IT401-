const checkEndString = (longStr, SortStr) => {
    return longStr.endsWith(SortStr);
};
console.log(checkEndString("Hello, World!", "Hello"));
console.log(checkEndString("Hi there!", "there!"));

