abstract class Job {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    abstract calculateSalary(): number;
}

class PartimeJob extends Job {
    private workingHour: number;

    constructor(workingHour: number) {
        super("Part-time");
        this.workingHour = workingHour;
    }

    calculateSalary(): number {
        return this.workingHour * 30000;
    }
}

class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }

    calculateSalary(): number {
        return 10000000;
    }
}

const parttime = new PartimeJob(80);
const fulltime = new FulltimeJob();

console.log("Thông tin công việc Part-time:");
parttime.printType();
console.log(`Lương: ${parttime.calculateSalary().toLocaleString()} VND`);

console.log("\nThông tin công việc Full-time:");
fulltime.printType();
console.log(`Lương: ${fulltime.calculateSalary().toLocaleString()} VND`);
