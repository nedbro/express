class Post {
    static idCount = 1;
    id: number;
    text: string;

    constructor(text: string) {
        this.id = Post.idCount;
        this.text = text;
        Post.idCount++;
    }
}