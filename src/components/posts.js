import React from "react";
import { useQuery } from "react-query";
import { getPosts } from "../queries";

const Posts = (props) => {
  const { data, isLoading, isError, isFetching } = useQuery(
    ["posts"],
    getPosts
  );
  if (isLoading) {
    return <p>loading ...</p>;
  }
  if (isError) {
    return <p>Something went wrong </p>;
  }
  return (
    <div>
      {isFetching && <p>fetching data...</p>}
      {data.map((data) => {
        return (
          <div key={data.id}>
            <p style={{ textAlign: "left" }}>{data.title}</p>
            <button onClick={() => props.history.push(`posts/${data.id}`)}>
              view
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
