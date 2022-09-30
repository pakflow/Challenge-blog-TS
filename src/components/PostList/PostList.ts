interface PostListProps {
  postItems: HTMLElement[];
  loading: boolean;
}

function PostList(props: PostListProps) {
  const { postItems, loading } = props;
  const postListEl = document.createElement("div");

  if (loading) {
    postListEl.innerHTML = "Loading...";
  } else {
    postItems.forEach((item) => postListEl.appendChild(item));
  }

  return postListEl;
}

export { PostList };
