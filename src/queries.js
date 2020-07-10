// all async function that we need in this file

import axios from "axios";

export const getPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

export const getPostById = async (key, id) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return data;
};
