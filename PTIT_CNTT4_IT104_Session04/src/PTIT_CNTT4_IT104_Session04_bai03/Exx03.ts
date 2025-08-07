interface Student {
    name: string;
    age: number;
    email: string;
}

function introduce(student: Student): void {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}

const student1: Student = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "nguyenvana@example.com"
};

introduce(student1);
