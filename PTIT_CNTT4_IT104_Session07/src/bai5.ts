class Account {
    public id: string;
    public unserName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;
    constructor(id: string, unserName: string, password: string, isLogin: boolean, role: string) {
        this.id = id;
        this.unserName = unserName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(): void {

    }
    logout(): void {
        if (this.isLogin) {
            console.log("dang xuat thanh cong ");
            this.isLogin = false;

        }
    }
}
class userAcc extends Account {
    public status: "active" | "banned";

    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string, status: "active" | "banned") {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }

    login(): void {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        } else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}


const acc1 = new userAcc("001", "vuong", "123456", false, "user", "active");


acc1.login();   