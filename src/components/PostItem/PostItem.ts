import { createElement } from "../../libs/renderer/utils/createElement";
import { FullPost } from "../../state";
import { router } from "../..";

import "./PostItem.css";

export interface PostItemProps {
  post: FullPost;
}

function PostItem({ post }: PostItemProps) {
  return createElement("div", { className: "post-item" }, [
    createElement("p", { className: "post-author" }, [post.author.name]),
    createElement("p", { className: "post-title" }, [post.title]),
    createElement("p", { className: "post-body" }, [post.body]),
    createElement(
      "a",
      {
        className: "btnToSinglePost",
        onclick: () => router.locateTo(`/posts/${post.id}`),
      },
      ["Read post"]
    ),
  ]);
}

export { PostItem };
