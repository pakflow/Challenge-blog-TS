import { AuthorEntity } from "./AuthorEntity";

interface PostEntity {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: AuthorEntity;
}

export { PostEntity };
