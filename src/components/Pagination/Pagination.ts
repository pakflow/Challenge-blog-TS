import { createElement } from "@libs/renderer/utils/createElement";

interface PaginationProps {
  totalCount: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  totalCount,
  perPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const pagesCount = Math.ceil(totalCount / perPage);
  const arrPagesCount = new Array(pagesCount);

  return createElement("div", { className: "pagination" }, [
    createElement("button", {
      className: "prevPage",
      onclick: () => {
        if (currentPage !== 1) {
          onPageChange(currentPage - 1);
        }
      },
    }),
    createElement(
      "div",
      { className: "posts-pages" },
      arrPagesCount.fill(null).map((_, idx) => {
        const page = idx + 1;
        return createElement(
          "span",
          {
            className: currentPage === page ? "page active" : "page",
            onclick: () => {
              if (currentPage !== page) {
                onPageChange(page);
              }
            },
          },
          [page.toString()]
        );
      })
    ),
    createElement("button", {
      className: "nextPage",
      disabled: currentPage >= pagesCount ? true : false,
      onclick: () => {
        if (currentPage !== pagesCount) {
          onPageChange(currentPage + 1);
        }
      },
    }),
  ]);
}

export { Pagination };
