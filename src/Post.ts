export class Post {
    id: number | undefined;
    text: string;
    private static idCount = 1;

    constructor(text: string) {
        console.log('constructor')
        this.text = text;
    }

    setId(id?: number) {
        if (id) {
            this.id = id;
        } else {
            this.id = Post.idCount;
            Post.idCount++;
        }
    }
}
