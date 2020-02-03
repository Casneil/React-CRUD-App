import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import styles from "styled-components";

const EditArticle = ({ match }) => {
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  const url = "http://localhost:8080/";

  useEffect(() => {
    axios
      .get(`${url}articles/${match.params.id}`)
      .then(res => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthorName(res.data.authorName)
      ])
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const articles = {
      title,
      article,
      authorName
    };
    setTitle("");
    setAuthorName("");
    setArticle("");
    axios
      .put(`${url}articles/update/${match.params.id}`, articles)
      .then(res => console.log(res.data))
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <EditArticleContainer>
      <div className="container">
        <Form onSubmit={handleSubmit} encType="miltipart/form-data">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="Author name"
            placeholder="Author name"
            width="sixteen"
            value={authorName}
            onChange={e => setAuthorName(e.target.value)}
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Title"
            placeholder="Title"
            width="sixteen"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Article..."
            value={article}
            onChange={e => setArticle(e.target.value)}
            rows={7}
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Submit"
            label=""
          />
        </Form>
      </div>
    </EditArticleContainer>
  );
};

export default EditArticle;

const EditArticleContainer = styles.div`
margin: 3rem auto;
padding: 4rem;
width: 31 rem;

`;
