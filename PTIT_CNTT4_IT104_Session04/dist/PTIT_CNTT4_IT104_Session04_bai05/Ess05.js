"use strict";
function printStaffInfo(staff) {
    console.log(`
        Tên nhân viên : ${staff.name} (tuổi: ${staff.age})
        Mã nhân viên: ${staff.employeeId},
        Phòng: ${staff.department},
        `);
}
const staff1 = {
    name: "Nguyen Van A",
    age: 19,
    employeeId: 1,
    department: "Phòng 201",
};
printStaffInfo(staff1);
