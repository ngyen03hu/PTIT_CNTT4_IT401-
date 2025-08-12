
abstract class Person {
    public name: string;
    constructor(name: string) {
        this.name = name;

    }
    abstract displayInfo(): void;
}
class Student extends Person {
    constructor(name: string, public id: string) {
        super(name);
    }
    displayInfo(): void {
        console.log(`Sinh vien : ${this.name}`);
        console.log(`Id : ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name: string, public subject: string) {
        super(name);

    }
    displayInfo(): void {
        console.log(`Teacher : ${this.name}`);
        console.log(`subject : ${this.subject}`);
    }
}

const teacher = new Teacher("Tuan", "Dev");
const stunden = new Student("Vuong", "B24DTCN408");

stunden.displayInfo();
teacher.displayInfo();