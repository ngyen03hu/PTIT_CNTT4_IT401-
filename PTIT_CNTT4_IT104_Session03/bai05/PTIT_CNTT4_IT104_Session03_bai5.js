"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "le";
let lastName = "Duy";
function capitlize(str) {
    let firstChar = str.charAt(0).toUpperCase();
    let remainingChars = str.slice(1);
    return firstChar + remainingChars;
}
let fullName = firstName + " " + lastName;
console.log(fullName);
//# sourceMappingURL=PTIT_CNTT4_IT104_Session03_bai5.js.map