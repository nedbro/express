import { AppError } from "./AppError";
import { Post } from "./Post";

export class MockService {
    posts: Post[] = [];

    addPost(post: Post): void {
        if (post.id && this.getPost(post.id)) {
            throw new AppError(400, "This post already exists")
        }

        this.posts.push(post);
        post.setId();
    }

    getPost(id: number): Post | undefined {
        return this.posts.find(post => post.id === id);
    }

    deletePost(id: number): void {
        const post = this.getPost(id);

        if (post) {
            this.posts = this.posts.filter(element => element != post);
        } else {
            throw new AppError(404, `Post not found with id ${id}`);
        }
    }

    updatePost(post: Post): Post {
        if (!post.id) {
            throw new AppError(400, 'Invalid input for updatePost');
        }

        const originalPost = this.getPost(post.id);

        if (originalPost) {
            originalPost.text = post.text;
        } else {
            throw new AppError(404, `Post not found with id ${post.id}`);
        }

        return originalPost;
    }
}