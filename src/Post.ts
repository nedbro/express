export class Post {
    id: number;
    text: string;
    static idCount = 1;

    constructor(text: string) {
        console.log('constructor')
        this.id = Post.idCount;
        this.text = text;
        Post.idCount++;
    }
}
