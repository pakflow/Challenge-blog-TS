import "./PostListPage.css";
import { PostList, PostListProps } from "../../components/PostList/PostList";
import { createElement } from "../../libs/renderer/utils/createElement";
import { state } from "../../state";
import { paginate } from "../../libs/renderer/utils/paginate";
import { Pagination } from "../../components/Pagination/Pagination";

function PostListPage(props: PostListProps) {
  const { posts, loading } = props;

  return createElement("div", { className: "post-list" }, [
    createElement("header", { className: "header_post-list" }, [
      "JSON Placeholder",
    ]),
    createElement("div", { className: "input-block" }, [
      createElement("input", {
        type: "text",
        id: "searchInput",
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
        posts.filter(
          (post) =>
            post.author.name
              .toLowerCase()
              .includes(state.getState().searchQuery.toLowerCase()) ||
            post.title.toLowerCase().includes(state.getState().searchQuery) ||
            post.body.toLowerCase().includes(state.getState().searchQuery)
        ),
        state.getState().limit,
        state.getState().currentPage
      ),
      loading,
    }),
    Pagination({
      totalCount: posts.length,
      perPage: state.getState().limit,
      currentPage: state.getState().currentPage,
      onPageChange: (currentPage) => {
        state.setState({ currentPage: currentPage });
      },
    }),
  ]);
}

export { PostListPage };
