import { FullPost } from "../../../state";

function paginate(posts: FullPost[], limit: number, currentPage: number) {
  return posts.slice((currentPage - 1) * limit, limit * currentPage);
}

export { paginate };
