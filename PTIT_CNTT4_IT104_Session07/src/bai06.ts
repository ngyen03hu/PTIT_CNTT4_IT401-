class Acccount {
    public id: string;
    public userName: string;
    public password: string;
    public isLogin: boolean;
    public role: string;
    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(): void {

    }
    logout(): void {
        if (this.isLogin) {
            console.log(`dang xuat thanh cong `);
            this.isLogin = false;
        }
    }
}
class userAccc extends Acccount {
    public status: "active " | "banned";

    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string, status: "active " | "banned") {
        super(id, userName, password, isLogin, role)
        this.status = status;
    }
    login(): void {
        if (this.status === "active ") {
            this.isLogin = true;
            console.log("dang nhap thanh cong");

        } else {
            console.log("tai khoan da bi khoa");

        }
    }

}
class adminAcc extends Account {
    constructor(id: string, userName: string, password: string) {
        super(id, userName, password, false, 'admin');
    }

    banUser(user) {
        user.status = 'banned';
        console.log(` Admin đã cấm tài khoản ${user.userName}.`);
    }
}
const acc3 = new userAccc("002", "anh", "243241", true, "admin", "banned")

acc3.login();