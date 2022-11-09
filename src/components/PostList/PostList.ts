import { PostItem } from "../PostItem/PostItem";
import { createElement } from "../../libs/renderer/utils/createElement";
import { FullPost } from "../../state";

export interface PostListProps {
  posts: FullPost[];
  loading: boolean;
}

function PostList(props: PostListProps) {
  const { posts, loading } = props;

  return createElement(
    "div",
    undefined,
    loading ? ["Loading..."] : posts.map((post) => PostItem({ post: post }))
  );
}

export { PostList };
