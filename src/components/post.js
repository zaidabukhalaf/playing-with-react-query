import React from "react";
import { useQuery } from "react-query";
import { getPostById } from "../queries";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const { id } = props.match.params;

  const { data, isLoading, isError, isFetching } = useQuery(
    ["posts", id],
    getPostById
  );
  if (isLoading) {
    return <p>loading ...</p>;
  }
  if (isError) {
    return <p>Something went wrong </p>;
  }
  let history = useHistory();
  return (
    <div>
      {isFetching && <p>fetching data...</p>}
      <button onClick={() => history.goBack()}>Back</button>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default Post;
