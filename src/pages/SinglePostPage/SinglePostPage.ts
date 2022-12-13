import { PostItemProps } from "@PostItem/PostItem";
import { createElement } from "@utils/createElement";
import { state } from "@state/index";
import { router } from "@browserRouter/";

import "./SinglePostPage.css";

function SinglePostPage({ post }: PostItemProps) {
  const indexOfPost = state
    .getState()
    .posts.findIndex((statePost) => statePost.id === post.id);
  const statePosts = state.getState().posts;

  return createElement("div", { className: "single-post" }, [
    createElement(
      "button",
      {
        className: "btn-back",
        onclick: () => {
          router.locateTo("/");
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
      statePosts[indexOfPost - 1] !== undefined
        ? createElement(
            "button",
            {
              className: "btnSinglePost back",
              onclick: () => {
                router.locateTo(`/posts/${statePosts[indexOfPost - 1].id}`);
              },
            },
            [statePosts[indexOfPost - 1].title.substring(0, 35).concat("...")]
          )
        : undefined,
      statePosts[indexOfPost + 1] !== undefined
        ? createElement(
            "button",
            {
              className: "btnSinglePost next",
              onclick: () => {
                router.locateTo(`/posts/${statePosts[indexOfPost + 1].id}`);
              },
            },
            [statePosts[indexOfPost + 1].title.substring(0, 35).concat("...")]
          )
        : undefined,
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
