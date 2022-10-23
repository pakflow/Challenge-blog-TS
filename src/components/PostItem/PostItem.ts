import "./PostItem.css";

import { PostEntity } from "../../entities/PostEntity";
import { AuthorEntity } from "../../entities/AuthorEntity";
import { createElement } from "../../libs/renderer/utils/createElement";
type PostItemProps = {
  post: PostEntity;
};

type AuthorProps = {
  author: AuthorEntity;
};

function PostItem(postProps: PostItemProps, authorProps: AuthorProps) {
  const { post } = postProps;
  const { author } = authorProps;

  return createElement("div", { className: "post-item" }, [
    createElement("p", { className: "post-title" }, [post.title]),
    createElement("p", { className: "" }, [post.body]),
    createElement("p", { className: "post-author" }, [
      post.userId.toString() === author.id.toString() ? author.name : null,
    ]),
  ]);
}

export { PostItem };
