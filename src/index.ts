import "./style.css";

import { PostList } from "./components/PostList/PostList";
import { Renderer } from "./libs/renderer/Renderer";
import { loadPosts } from "./state/actions";
import { state } from "./state";
import { PostItem } from "./components/PostItem/PostItem";
import { BrowserRouter } from "./router/BrowserRouter";
import { Router } from "./router/components/Router";

// Render
const dom = new Renderer();
const root = document.getElementById("app");
export const router = new BrowserRouter(location.pathname);
const urlData = window.location.pathname;

function render() {
  console.log(router.getLocate());
  // console.log(urlData);
  dom.render(
    Router({
      router,
      routes: [
        {
          path: /^\/$/,
          element: PostList({
            loading: state.getState().postsLoading,
            posts: state.getState().posts,
          }),
        },
        // {
        //   path: /^\/posts\/(\d+)$/,
        //   element: PostItem({
        //     post: state.getState().posts.find((p) => p.id === id),
        //   }),
        // },
      ],
    }),
    root
  );
}

state.subscribe(render);
router.subscribe(render);

// Load data
loadPosts();
