import { PostItem } from "../PostItem/PostItem";
import { createElement } from "../../libs/renderer/utils/createElement";
import { FullPost } from "../../state";
import { PostsLoading } from "../PostsLoading/PostsLoading";

export interface PostListProps {
  posts: FullPost[];
  loading: boolean;
}

function PostList({ posts, loading }: PostListProps) {
  return createElement(
    "div",
    undefined,
    loading ? [PostsLoading()] : posts.map((post) => PostItem({ post: post }))
  );
}

export { PostList };
