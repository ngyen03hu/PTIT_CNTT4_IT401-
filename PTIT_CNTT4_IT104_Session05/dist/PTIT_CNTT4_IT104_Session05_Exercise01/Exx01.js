"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo() {
        console.log(`Tên: ${this.name}, Năm: ${this.year}, Hãng: ${this.company}`);
    }
}
const xe1 = new Vehicle("Camry", 2019, "Toyota");
const xe2 = new Vehicle("CX-5", 2021, "Mazda");
xe1.printInfo();
xe2.printInfo();
