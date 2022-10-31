import "./PostItem.css";
import { createElement } from "../../libs/renderer/utils/createElement";
import { FullPost } from "../../state";
import { Router } from "../../router/components/Router";
import { router } from "../..";
type PostItemProps = {
  post: FullPost;
};

function PostItem(props: PostItemProps) {
  const { post } = props;

  return createElement("div", { className: "post-item" }, [
    // createElement("i", {className: "post-icon", })
    createElement("p", { className: "post-author" }, [post.author.name]),
    createElement("p", { className: "post-title" }, [post.title]),
    createElement("p", { className: "" }, [post.body]),
    createElement(
      "a",
      { onclick: () => router.locateTo(`/posts/${post.id}`) },
      ["Read post"]
    ),
  ]);
}

export { PostItem };
