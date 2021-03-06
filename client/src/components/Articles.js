import React, { useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import Loading from "./Loading";
import { Grid } from "semantic-ui-react";

const Articles = ({ posts }) => {
  console.log("Posts:", posts);
  const url = "http://localhost:8080/";
  const [article, setArticle] = useState([]);

  const deleteArticleById = id => {
    axios.delete(`${url}articles/${id}`).then(res => alert(res.data));
    setArticle(article.filter(card => card._id !== id));
  };

  return (
    <div>
      {posts <= 0 ? (
        <Loading />
      ) : (
        posts.map(post => {
          return (
            <PostCard
              key={post._id}
              articles={post}
              deleteArticle={deleteArticleById}
              styles={{ margin: 0 }}
            />
          );
        })
      )}
    </div>
  );
};

export default Articles;
