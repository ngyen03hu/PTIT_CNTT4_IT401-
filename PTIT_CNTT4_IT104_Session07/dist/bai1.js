// class Employee có thuộc tính:
// name: Tên nhân viên, có phạm vi truy cập là public.
//     company: Tên công ty, có phạm vi truy cập là protected.
//         phone: Số điện thoại, có phạm vi truy cập là private.
// Phương thức:
// printInfo(): In ra tất cả các thuộc tính của lớp Employee(bao gồm name, company, phone).
// class Manager:
// Lớp con kế thừa từ Employee.
// Thêm thuộc tính mới teamSize: Số lượng thành viên.
// Phương thức:
// printInfo(): Ghi đè phương thức printInfo() từ lớp Employee để in thêm thông tin về teamSize cùng với các thông tin từ lớp cha.
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name ${this.name}`);
        console.log(`Company : ${this.company}`);
        console.log(`phone : ${this.phone}`);
    }
}
class Manager extends Employee {
    /**
     *
     */
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`tem Size :${this.teamSize}`);
    }
}
const manager = new Manager("Vương", "Rikkei", "012345678", 5);
manager.printInfo();
