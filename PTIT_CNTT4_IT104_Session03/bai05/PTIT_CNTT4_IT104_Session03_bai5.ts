let firstName: string = "le";
let lastName: string = "Duy";

function capitlize(str: string): string {
    let firstChar = str.charAt(0).toUpperCase();
    let remainingChars = str.slice(1);
    return firstChar + remainingChars;
}
let fullName: string = firstName + " " + lastName;
console.log(fullName);
