const checkParity = (a) => {
    if (typeof a !== 'number' || isNaN(a)) {
        console.log("a not is number");
        return;
    }
    if (a % 2 === 0) {
        console.log("a is even");
    } else {
        console.log("a is odd");
    }
}