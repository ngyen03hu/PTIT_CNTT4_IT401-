// Khai báo hai biến với kiểu dữ liệu khác nhau
let strValue: string = "2";   // Biến kiểu chuỗi, giá trị là "2"
let numValue: number = 2;     // Biến kiểu số, giá trị là 2

// So sánh bằng toán tử == (so sánh lỏng lẻo)
console.log(Number(strValue) == numValue);
// Kết quả: true
// Giải thích: Toán tử == cho phép chuyển đổi kiểu ngầm định.
// Chuỗi "2" được ép kiểu thành số 2 trước khi so sánh → 2 == 2 → true

// So sánh bằng toán tử === (so sánh nghiêm ngặt)
console.log(strValue === numValue.toString());
// Kết quả: true
// Giải thích: Toán tử === yêu cầu cả kiểu dữ liệu và giá trị phải giống nhau.
// strValue là "2" (kiểu chuỗi), numValue.toString() cũng là "2" (kiểu chuỗi) → giống nhau hoàn toàn → true
