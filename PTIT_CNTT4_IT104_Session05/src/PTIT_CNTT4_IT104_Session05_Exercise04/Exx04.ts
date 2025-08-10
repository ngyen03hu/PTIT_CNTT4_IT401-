class Vehiclec {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: string;

    constructor(name: string, year: number, company: string, id: string) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }

    public printInfo(): void {
        console.log("Tên xe:", this.name);
        console.log("Năm sản xuất:", this.year);
        console.log("Hãng:", this.company);
        console.log("ID:", this.id);
    }
}

const xe = new Vehiclec("Toyota Camry", 2022, "Toyota", "V001");

xe.printInfo();
