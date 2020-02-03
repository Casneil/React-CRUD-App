import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "styled-components";

const Article = ({ match }) => {
  const { params, id } = match;
  console.log("KKKK", params, id);
  const [article, setArticle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");

  const url = "http://localhost:8080/";

  useEffect(() => {
    axios
      .get(`${url}articles/${id}`)
      .then(res => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthorName(res.data.authorName)
      ])
      .catch(error => console.log(error));
  }, [id]);

  return <div></div>;
};

export default Article;
