import { PostEntity } from "../../entities/PostEntity";
import "./PostItem.css";

type PostItemProps = {
  post: PostEntity;
};

function PostItem(props: PostItemProps) {
  const { post } = props;

  return `
    <div class="post-item">
      <p class="post-title">${post.title}</p>
      <p class="post-author">${post.userId}</p>
    </div>
  `;
}

export { PostItem };
