function sum(arr) {
    let tong = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            tong += arr[i];
        }
    }
    return tong;
}
console.log(sum([1, 2, 3, 4, 5, 6]));