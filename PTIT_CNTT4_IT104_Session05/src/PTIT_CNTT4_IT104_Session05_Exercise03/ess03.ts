class Employee {
    public name: string;
    protected company: string;
    private phone: number;

    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void {
        console.log(`
            Ten : ${this.name}
            chuc vu : ${this.company}
            sdt : ${this.phone}
            `);

    }
}
const menger = new Employee("Phuong anh ", "Quan tri", 8471974421);
console.log(menger);
