function parseToNumber(input: string | number): number | null {
    if (typeof input === "number") return input;
    const result = Number(input);
    return isNaN(result) ? null : result;
}

function sumValues(x: string | number, y: string | number): number | string {
    const valX = parseToNumber(x);
    const valY = parseToNumber(y);
    if (valX === null || valY === null) return "Giá trị không hợp lệ";
    return valX + valY;
}

function diffValues(x: string | number, y: string | number): number | string {
    const valX = parseToNumber(x);
    const valY = parseToNumber(y);
    if (valX === null || valY === null) return "Giá trị không hợp lệ";
    return valX - valY;
}

function productValues(x: string | number, y: string | number): number | string {
    const valX = parseToNumber(x);
    const valY = parseToNumber(y);
    if (valX === null || valY === null) return "Giá trị không hợp lệ";
    return valX * valY;
}

function quotientValues(x: string | number, y: string | number): number | string {
    const valX = parseToNumber(x);
    const valY = parseToNumber(y);
    if (valX === null || valY === null || valY === 0) return "Giá trị không hợp lệ";
    return valX / valY;
}

// Kiểm tra kết quả
console.log(sumValues("10", 5));         // 15
console.log(diffValues("20", "4"));      // 16
console.log(productValues(3, "2"));      // 6
console.log(quotientValues(10, "a"));    // "Giá trị không hợp lệ"
console.log(quotientValues("8", "0"));   // "Giá trị không hợp lệ"
