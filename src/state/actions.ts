import { PostService } from "../services/postService/PostService";
import { FullPost, state } from ".";

const loadPosts = async () => {
  state.setState({ postsLoading: true });

  const posts = await PostService.getPostsList();
  const authors = await PostService.getAuthorsList();
  const comments = await PostService.getCommentList();
  const fullPosts: FullPost[] = [];

  posts.forEach((item) => {
    const post = item;
    const postAuthor = authors.find((author) => author.id === post.userId);
    const postComments = comments.filter(
      (comment) => comment.postId === post.id
    );
    const fullPost = { ...post, author: postAuthor, comments: postComments };
    fullPosts.push(fullPost);
  });

  state.setState({ postsLoading: false, posts: fullPosts });
};

export { loadPosts };
