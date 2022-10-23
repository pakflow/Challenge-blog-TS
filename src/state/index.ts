import { PostEntity } from "../entities/PostEntity";
import { Store } from "../libs/store/Store";

interface IState {
  posts: PostEntity[];
  searchQuery: string;
  postsLoading: boolean;
  post: PostEntity | null;
}

const state = new Store<IState>({
  posts: [],
  postsLoading: false,
  post: null,
  searchQuery: "",
});

export { state };
