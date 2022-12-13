import { PostItem } from "@PostItem/PostItem";
import { createElement } from "@utils/createElement";
import { FullPost } from "@state/index";
import { PostsLoading } from "@PostsLoading/PostsLoading";

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
