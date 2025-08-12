class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Sinh vien : ${this.name}`);
        console.log(`Id : ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Teacher : ${this.name}`);
        console.log(`subject : ${this.subject}`);
    }
}
const teacher = new Teacher("Tuan", "Dev");
const stunden = new Student("Vuong", "B24DTCN408");
stunden.displayInfo();
teacher.displayInfo();
