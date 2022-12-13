import { createElement } from "@utils/createElement";

import "./PostsLoading.css";

function PostsLoading() {
  return createElement("div", { className: "posts-loading" }, [
    createElement("div", { className: "singlePostLoading" }, [
      createElement("div", { className: "bookLoadingDiv" }, [
        createElement("div", { className: "book-loading" }),
      ]),
      createElement("div", { className: "content-load" }, [
        createElement("div", { className: "author-loading" }),
        createElement("div", { className: "title-loading" }),
        createElement("div", { className: "body-loading" }),
        createElement("div", { className: "btn_singlePost-loading" }),
      ]),
    ]),
    createElement("div", { className: "singlePostLoading" }, [
      createElement("div", { className: "bookLoadingDiv" }, [
        createElement("div", { className: "book-loading" }),
      ]),
      createElement("div", { className: "content-load" }, [
        createElement("div", { className: "author-loading" }),
        createElement("div", { className: "title-loading" }),
        createElement("div", { className: "body-loading" }),
        createElement("div", { className: "btn_singlePost-loading" }),
      ]),
    ]),
    createElement("div", { className: "singlePostLoading" }, [
      createElement("div", { className: "bookLoadingDiv" }, [
        createElement("div", { className: "book-loading" }),
      ]),
      createElement("div", { className: "content-load" }, [
        createElement("div", { className: "author-loading" }),
        createElement("div", { className: "title-loading" }),
        createElement("div", { className: "body-loading" }),
        createElement("div", { className: "btn_singlePost-loading" }),
      ]),
    ]),
    createElement("div", { className: "singlePostLoading" }, [
      createElement("div", { className: "bookLoadingDiv" }, [
        createElement("div", { className: "book-loading" }),
      ]),
      createElement("div", { className: "content-load" }, [
        createElement("div", { className: "author-loading" }),
        createElement("div", { className: "title-loading" }),
        createElement("div", { className: "body-loading" }),
        createElement("div", { className: "btn_singlePost-loading" }),
      ]),
    ]),
  ]);
}

export { PostsLoading };
