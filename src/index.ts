import { PostItem } from "./components/PostItem/PostItem";
import { loadPosts } from "./state/actions";
import { state } from "./state";

const root = document.getElementById("app");

state.subscribe(render);

loadPosts();

function postsList() {
  const { posts, postsLoading } = state.getState();

  if (postsLoading) {
    root.innerHTML = "Loading...";
    return;
  }

  const postsList = posts.map((post) => {
    return PostItem({ post: post });
  });

  root.innerHTML = postsList.join("");
}

function render() {
  postsList();
}

render();
