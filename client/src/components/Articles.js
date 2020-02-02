import React from "react";
import PostCard from "./PostCard";
import Loading from "./Loading";

const Articles = ({ posts }) => {
  console.log("Posts:", posts);

  return (
    <div>
      {posts <= 0 ? (
        <Loading />
      ) : (
        posts.map(post => <PostCard key={post._id} articles={post} />)
      )}
    </div>
  );
};

export default Articles;
