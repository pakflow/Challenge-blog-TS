import "./style.css";

import { PostList } from "./components/PostList/PostList";
import { Renderer } from "./libs/renderer/Renderer";
import { loadAuthors, loadPosts } from "./state/actions";
import { state } from "./state";
import { PostItem } from "./components/PostItem/PostItem";

// Load data
loadPosts();
loadAuthors();

// Render
const dom = new Renderer();
const root = document.getElementById("app");

function render() {
  dom.render(
    PostList({ loading: false, postItems: state.getState().posts }),
    root
  );
}

state.subscribe(render);
