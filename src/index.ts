import { PostItem } from "./components/PostItem/PostItem";
import { loadPosts } from "./state/actions";
import { state } from "./state";
import "./style.css";

const root = document.getElementById("app");

state.subscribe(render);

loadPosts();

function postsList() {
  const { posts, postsLoading } = state.getState();
  root.innerHTML = "";

  if (postsLoading) {
    root.innerHTML = "Loading...";
    return;
  }

  posts.forEach((post) => {
    root.appendChild(PostItem({ post: post }));
  });

  //   root.innerHTML = postsList.join("");
}

function render() {
  postsList();
}

render();
