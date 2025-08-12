/*
Class Vehicle:
Thuộc tính:
name: Tên phương tiện (protected).
speed: Tốc độ của phương tiện (protected).
id: Mã định danh của phương tiện (protected).
Phương thức:
slowDown(): Phương thức để giảm tốc độ.
speedUp(): Phương thức để tăng tốc độ.
showSpeed(): Phương thức để in ra tốc độ hiện tại.
Class Bicycle:
Lớp Bicycle kế thừa từ Vehicle.
Thêm thuộc tính:
gear: Số bánh răng của xe đạp (private).
Tạo phương thức:
showInfo(): In ra tất cả thông tin của xe đạp, bao gồm thông tin từ lớp Vehicle và thêm thuộc tính gear.
Yêu cầu:

Tạo một đối tượng từ lớp Bicycle, sau đó tiến hành gọi các phương thức speedUp(), slowDown(), và showSpeed() để thay đổi tốc độ và in kết quả.
In ra thông tin của đối tượng Bicycle với phương thức showInfo().

*/
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedUp() {
        this.speed += 5;
    }
    slowDown() {
        this.speed = Math.max(0, this.speed - 5);
    }
    showSpeed() {
        console.log(` toc do bay g la : ${this.speed}`);
    }
}
class bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Name :${this.name}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`id : ${this.id}`);
        console.log(`Gear : ${this.gear}`);
    }
}
const myBike = new bicycle("Roadster", 10, "B123", 6);
myBike.speedUp();
myBike.slowDown();
myBike.showSpeed();
myBike.showInfo();
