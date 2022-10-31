import { AuthorEntity } from "../../entities/AuthorEntity";
import { CommentEntity } from "../../entities/CommentEntity";
import { PostEntity } from "../../entities/PostEntity";
import { Requester } from "../../libs/requester/Requester";

class PostService {
  private static requester = new Requester();
  private static baseUrl = "https://jsonplaceholder.typicode.com";

  static getPostsList(): Promise<PostEntity[]> {
    return this.requester.get(`${this.baseUrl}/posts`);
  }

  static getPost(id: number) {
    return this.requester.get(`${this.baseUrl}/posts/${id}`);
  }

  static getAuthorsList(): Promise<AuthorEntity[]> {
    return this.requester.get(`${this.baseUrl}/users`);
  }

  static getAuthor(id: number) {
    return this.requester.get(`${this.baseUrl}/users/${id}`);
  }

  static getCommentList(): Promise<CommentEntity[]> {
    return this.requester.get(`${this.baseUrl}/comments`);
  }
}

export { PostService };
