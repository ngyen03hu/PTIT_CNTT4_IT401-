let input: string = "hello world";
let result: string = "";

for (let i = 0; i < input.length; i++) {
    let charAt = input[i];
    if (result.indexOf(charAt) === -1) {
        result += charAt;
    }
}

console.log(result); 