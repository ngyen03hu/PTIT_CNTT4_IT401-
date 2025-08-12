class MyComment {
    public id: number;
    public userId: number;
    public content: string;
    public replies: MyComment[];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    public addReply(reply: MyComment): void {
        this.replies.push(reply);
    }
}

class MyPost {
    private static nextId = 1;
    private static store = new Map<number, MyPost>();

    public static getById(id: number): MyPost | undefined {
        return this.store.get(id);
    }

    public id: number;
    public likes: number[];
    public comments: MyComment[];
    public userId: number;
    public content: string;

    constructor(userId: number, content: string) {
        this.id = MyPost.nextId++;
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
        MyPost.store.set(this.id, this);
    }

    public addLike(userId: number): void {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }

    public addComment(comment: MyComment): void {
        this.comments.push(comment);
    }
}

class MyUser {
    public id: number;
    public posts: MyPost[];
    public following: MyUser[];

    constructor(id: number) {
        this.id = id;
        this.posts = [];
        this.following = [];
    }

    public createPost(content: string): void {
        const post = new MyPost(this.id, content);
        this.posts.push(post);
    }

    public comment(postId: number, commentContent: string): void {
        const post = MyPost.getById(postId);
        if (post) {
            const cmt = new MyComment(post.comments.length + 1, this.id, commentContent);
            post.addComment(cmt);
        }
    }

    public follow(user: MyUser): void {
        const isFollowing = this.following.some(u => u.id === user.id);
        if (!isFollowing && user !== this) {
            this.following.push(user);
        }
    }

    public likePost(postId: number): void {
        const post = MyPost.getById(postId);
        if (post) {
            post.addLike(this.id);
        }
    }

    public viewFeed(): void {
        console.log(`Bang tin cua user ${this.id}:`);
        this.following.forEach(u => {
            u.posts.forEach(p => {
                console.log(`Post ${p.id} cua user ${p.userId}: ${p.content}`);
            });
        });
    }
}

// Tao nguoi dung
const userA = new MyUser(1);
const userB = new MyUser(2);
const userC = new MyUser(3);

// Tao bai viet
userA.createPost("A: Xin chao");
userB.createPost("B: Cau hoc dinh vay");
userC.createPost("C: Dung vay!");

// A theo doi B va C
userA.follow(userB);
userA.follow(userC);

// A xem bang tin
userA.viewFeed();

// A thich bai viet cua B
userA.likePost(2);

// C binh luan bai viet cua B
userC.comment(2, "Hehe");

// In thong tin bai viet 2
console.log(MyPost.getById(2));
