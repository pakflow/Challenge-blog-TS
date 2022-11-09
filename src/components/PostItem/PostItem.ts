import "./PostItem.css";
import { createElement } from "../../libs/renderer/utils/createElement";
import { FullPost } from "../../state";
import { router } from "../..";
export type PostItemProps = {
  post: FullPost;
};

function PostItem(props: PostItemProps) {
  const { post } = props;

  return post
    ? createElement("div", { className: "post-item" }, [
        createElement("p", { className: "post-author" }, [post.author.name]),
        createElement("p", { className: "post-title" }, [post.title]),
        createElement("p", { className: "post-body" }, [post.body]),
        createElement(
          "a",
          { onclick: () => router.locateTo(`/posts/${post.id}`) },
          ["Read post"]
        ),
      ])
    : createElement("div", undefined, ["Loading..."]);
}

export { PostItem };
