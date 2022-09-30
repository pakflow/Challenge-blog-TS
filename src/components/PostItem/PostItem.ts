import { PostEntity } from "../../entities/PostEntity";
import "./PostItem.css";

type PostItemProps = {
  post: PostEntity;
};

function PostItem(props: PostItemProps) {
  const { post } = props;

  const postItem = document.createElement("div");
  postItem.className = "post-item";

  const postTitle = document.createElement("p");
  postTitle.className = "post-title";
  postTitle.innerText = `${post.title}`;
  postItem.appendChild(postTitle);

  const postBody = document.createElement("p");
  postBody.className = "post-body";
  postBody.innerText = `${post.body}`;
  postItem.appendChild(postBody);

  const postAuhor = document.createElement("p");
  postAuhor.className = "post-author";
  postAuhor.innerText = `${post.id}`;
  postItem.appendChild(postAuhor);

  return postItem;

  // return `
  //   <div class="post-item">
  //     <p class="post-title">${post.title}</p>
  //     <p class="post-author">${post.userId}</p>
  //   </div>
  // `;
}

export { PostItem };
