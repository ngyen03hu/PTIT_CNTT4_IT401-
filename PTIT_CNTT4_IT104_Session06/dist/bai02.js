class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class PartimeJob extends Job {
    constructor(workingHour) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return this.workingHour * 30000;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }
    calculateSalary() {
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
