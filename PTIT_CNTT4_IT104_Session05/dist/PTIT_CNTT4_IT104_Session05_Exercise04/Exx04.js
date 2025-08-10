"use strict";
class Vehiclec {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log("Tên xe:", this.name);
        console.log("Năm sản xuất:", this.year);
        console.log("Hãng:", this.company);
        console.log("ID:", this.id);
    }
}
const xe = new Vehiclec("Toyota Camry", 2022, "Toyota", "V001");
xe.printInfo();
