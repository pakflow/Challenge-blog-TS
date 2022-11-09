import "./PostListPage.css";
import { PostList, PostListProps } from "../../components/PostList/PostList";
import { createElement } from "../../libs/renderer/utils/createElement";
import { state } from "../../state";

function PostListPage(props: PostListProps) {
  const { posts, loading } = props;
  const limit = 10;
  const pageCount = Math.ceil(posts.length / limit);
  const arrOfNumsPage = [];
  for (let i = 1; i <= pageCount; i++) {
    arrOfNumsPage.push(i);
  }
  let currentPage = 1;

  return createElement("div", { className: "post-list" }, [
    createElement("header", { className: "header_post-list" }, [
      "JSON Placeholder",
    ]),
    createElement("div", { className: "input-block" }, [
      createElement("input", {
        type: "text",
        id: "searchInput",
        placeholder: "Type something to search...",
        onchange: (event: Event) => {
          const tar = (event.target as HTMLInputElement).value;
          state.setState({
            posts: posts.filter(
              (item) =>
                item.author.name.includes(tar.toLowerCase()) ||
                item.title.includes(tar.toLowerCase()) ||
                item.body.includes(tar.toLowerCase())
            ),
          });
        },
      }),
    ]),
    PostList({ posts, loading }),
    createElement("div", { className: "pagination" }, [
      createElement("button", {
        className: "prevPage",
        onclick: () => {
          if (currentPage !== 1) {
            currentPage - 1;
          }
        },
      }),
      createElement(
        "div",
        { className: "posts-pages" },
        arrOfNumsPage.map((page) =>
          createElement("span", { className: "page" }, [page.toString()])
        )
      ),
      createElement("button", {
        className: "nextPage",
        onclick: () => {
          if (currentPage !== pageCount) {
            currentPage + 1;
          }
        },
      }),
    ]),
  ]);
}

export { PostListPage };
