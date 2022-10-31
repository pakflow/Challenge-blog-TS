import { PostItem } from "../PostItem/PostItem";
import { createElement, vNode } from "../../libs/renderer/utils/createElement";
import { FullPost, state } from "../../state";

interface PostListProps {
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
