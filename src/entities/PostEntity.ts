import { AuthorEntity } from "./AuthorEntity";

type PostEntity = {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: AuthorEntity;
};

export { PostEntity };
