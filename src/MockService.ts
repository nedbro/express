import { AppError } from "./AppError";

export class MockService {
    posts: Post[] = [];

    addPost(post: Post): void {
        if (this.getPost(post.id)) {
            throw new AppError(400, "This post already exists")
        }

        this.posts.push(post);
    }

    getPost(id: number): Post | undefined {
        return this.posts.find(post => post.id === id);
    }

    deletePost(id: number): void {
        const post = this.getPost(id);

        if (post) {
            this.posts.filter(element => element != post);
        }
    }

    updatePost(post: Post): void {
        const originalPost = this.getPost(post.id);

        if (originalPost) {
            originalPost.text = post.text;
        }
    }
}