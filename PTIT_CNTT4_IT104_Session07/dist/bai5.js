class Account {
    constructor(id, unserName, password, isLogin, role) {
        this.id = id;
        this.unserName = unserName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login() {
    }
    logout() {
        if (this.isLogin) {
            console.log("dang xuat thanh cong ");
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
const acc1 = new userAcc("001", "vuong", "123456", false, "user", "active");
acc1.login();
