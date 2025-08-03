function createUser(name = "Dev", age = 18, role = "User") {
    return {
        name,
        age,
        role,

    };

}
const user1 = createUser("Dev");
console.log(user1);

const user2 = createUser("Nguyen Van A ", 20, "Admin");
console.log(user2);