import { PostEntity } from "../../entities/PostEntity";
import { PostItem } from "../PostItem/PostItem";
import { createElement } from "../../libs/renderer/utils/createElement";
import { state } from "../../state";
import { AuthorEntity } from "../../entities/AuthorEntity";

interface PostListProps {
  postItems: PostEntity[];
  loading: boolean;
}

interface AuthorListProps {
  authors: AuthorEntity[];
}

function PostList(postProps: PostListProps, authorProps: AuthorListProps) {
  const { postItems, loading } = postProps;
  const { authors } = authorProps;

  return createElement(
    "div",
    undefined,
    loading
      ? ["Loading..."]
      : postItems.map((item) => PostItem({ post: item }, { author: item }))
  );
  //
}

export { PostList };
