"use strict";
function introduce(student) {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}
const student1 = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "nguyenvana@example.com"
};
introduce(student1);
