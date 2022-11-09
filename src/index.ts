import "./style.css";

import { Renderer } from "./libs/renderer/Renderer";
import { loadPosts } from "./state/actions";
import { state } from "./state";
import { PostItem } from "./components/PostItem/PostItem";
import { BrowserRouter } from "./router/BrowserRouter";
import { Router } from "./router/components/Router";
import { PostListPage } from "./pages/PostListPage/PostListPage";
import { SinglePostPage } from "./pages/SinglePostPage/SinglePostPage";

// Render
const dom = new Renderer();
const root = document.getElementById("app");
export const router = new BrowserRouter(location.pathname);

function render() {
  dom.render(
    Router({
      router,
      routes: [
        {
          path: /^\/$/,
          element: () =>
            PostListPage({
              loading: state.getState().postsLoading,
              posts: state.getState().posts,
            }),
        },
        {
          path: /^\/posts\/(\d+)$/,
          element: (params) =>
            SinglePostPage({
              post: state
                .getState()
                .posts.find((p) => p.id === Number(params[0])),
            }),
        },
      ],
    }),
    root
  );
}

state.subscribe(render);
router.subscribe(render);

// Load data
loadPosts();
