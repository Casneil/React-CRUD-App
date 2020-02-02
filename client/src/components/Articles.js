import React from "react";
import PostCard from "./PostCard";

const Articles = ({ posts }) => {
  console.log("Posts:", posts);

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post._id} articles={post} />
      ))}
    </div>
  );
};

export default Articles;
