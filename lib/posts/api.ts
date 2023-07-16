import { posts } from "./testdata";

export const getPosts = async () => {
  return posts.slice(0, 10);
}