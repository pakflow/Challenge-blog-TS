import "./SinglePostPage.css";
import { PostItemProps } from "../../components/PostItem/PostItem";
import { createElement } from "../../libs/renderer/utils/createElement";

function SinglePostPage(props: PostItemProps) {
  const { post } = props;
  return createElement("div", { className: "single-post" }, [
    createElement(
      "button",
      {
        className: "btn-back",
        onclick: () => {
          history.back();
        },
      },
      ["back to posts"]
    ),
    createElement("header", { className: "header_single-post" }, [post.title]),
    createElement("div", { className: "author-block" }, [
      createElement("p", { className: "author_char" }, [post.author.name[0]]),
      createElement("p", { className: "single-post_author" }, [
        post.author.name,
      ]),
    ]),
    createElement("div", { className: "single-post_body" }, [post.body]),
    createElement("div", { className: "single-post_pagination" }, [
      createElement("button", { className: "btnSinglePost back" }, ["back"]),
      createElement("button", { className: "btnSinglePost next" }, ["next"]),
    ]),
    createElement("h2", { className: "hdr_comments" }, ["comments"]),
    createElement(
      "div",
      { className: "single-post_comments" },
      post.comments.map((comment) =>
        createElement("div", { className: "comment" }, [
          createElement("p", { className: "comment-email" }, [comment.email]),
          createElement("div", { className: "comment-body" }, [comment.body]),
        ])
      )
    ),
  ]);
}

export { SinglePostPage };
