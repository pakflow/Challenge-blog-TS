import "./style.css";

import { PostItem } from "./components/PostItem/PostItem";
import { PostList } from "./components/PostList/PostList";
import { Renderer } from "./libs/renderer/Renderer";
import { loadPosts } from "./state/actions";
import { state } from "./state";

// Load data
loadPosts();

// Render
const dom = new Renderer();

function render() {
  const { posts, postsLoading } = state.getState();

  dom.render(
    document.getElementById("app"),
    PostList({
      postItems: posts.map((post) => PostItem({ post })),
      loading: postsLoading,
    })
  );
}

state.subscribe(render);
