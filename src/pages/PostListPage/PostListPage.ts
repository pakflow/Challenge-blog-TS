import { PostList, PostListProps } from "@PostList/PostList";
import { createElement } from "@utils/createElement";
import { state } from "@state/index";
import { paginate } from "@utils/paginate";
import { Pagination } from "@Pagination/Pagination";

import "./PostListPage.css";

function PostListPage({ posts, loading }: PostListProps) {
  const filterPosts = posts.filter(
    (post) =>
      post.author.name
        .toLowerCase()
        .includes(state.getState().searchQuery.toLowerCase()) ||
      post.title.toLowerCase().includes(state.getState().searchQuery) ||
      post.body.toLowerCase().includes(state.getState().searchQuery)
  );

  return createElement("div", { className: "post-list" }, [
    createElement("header", { className: "header_post-list" }, [
      "JSON Placeholder",
    ]),
    createElement("div", { className: "input-block" }, [
      createElement("input", {
        type: "text",
        className: "searchInput",
        placeholder: "Type something to search...",
        value: state.getState().searchQuery,
        oninput: (event: Event) => {
          const val = (event.target as HTMLInputElement).value;
          state.setState({
            searchQuery: val,
          });
        },
      }),
    ]),
    PostList({
      posts: paginate(
        filterPosts,
        state.getState().limit,
        state.getState().currentPage
      ),
      loading,
    }),
    Pagination({
      totalCount: filterPosts.length,
      perPage: state.getState().limit,
      currentPage: state.getState().currentPage,
      onPageChange: (currentPage) => {
        state.setState({ currentPage: currentPage });
      },
    }),
  ]);
}

export { PostListPage };
