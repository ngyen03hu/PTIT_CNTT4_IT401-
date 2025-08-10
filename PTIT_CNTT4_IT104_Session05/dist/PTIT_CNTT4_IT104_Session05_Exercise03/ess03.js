"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`
            Ten : ${this.name}
            chuc vu : ${this.company}
            sdt : ${this.phone}
            `);
    }
}
const menger = new Employee("Phuong anh ", "Quan tri", 8471974421);
console.log(menger);
