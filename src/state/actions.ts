import { PostService } from "../services/postService/PostService";
import { state } from ".";

const loadPosts = async () => {
  state.setState({ postsLoading: true });
  const posts = await PostService.getPostsList();
  state.setState({ posts, postsLoading: false });
};

const loadAuthors = async () => {
  const authors = await PostService.getAuthorsList();
  state.setState(authors);
};

export { loadPosts, loadAuthors };
