class Acccount {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login() {
    }
    logout() {
        if (this.isLogin) {
            console.log(`dang xuat thanh cong `);
            this.isLogin = false;
        }
    }
}
class userAccc extends Acccount {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active ") {
            this.isLogin = true;
            console.log("dang nhap thanh cong");
        }
        else {
            console.log("tai khoan da bi khoa");
        }
    }
}
class adminAcc extends Account {
    constructor(id, userName, password) {
        super(id, userName, password, false, 'admin');
    }
    banUser(user) {
        user.status = 'banned';
        console.log(` Admin đã cấm tài khoản ${user.userName}.`);
    }
}
const acc3 = new userAccc("002", "anh", "243241", true, "admin", "banned");
acc3.login();
