class MyComment {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
class MyPost {
    static getById(id) {
        return this.store.get(id);
    }
    constructor(userId, content) {
        this.id = MyPost.nextId++;
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
        MyPost.store.set(this.id, this);
    }
    addLike(userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
MyPost.nextId = 1;
MyPost.store = new Map();
class MyUser {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.following = [];
    }
    createPost(content) {
        const post = new MyPost(this.id, content);
        this.posts.push(post);
    }
    comment(postId, commentContent) {
        const post = MyPost.getById(postId);
        if (post) {
            const cmt = new MyComment(post.comments.length + 1, this.id, commentContent);
            post.addComment(cmt);
        }
    }
    follow(user) {
        const isFollowing = this.following.some(u => u.id === user.id);
        if (!isFollowing && user !== this) {
            this.following.push(user);
        }
    }
    likePost(postId) {
        const post = MyPost.getById(postId);
        if (post) {
            post.addLike(this.id);
        }
    }
    viewFeed() {
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
