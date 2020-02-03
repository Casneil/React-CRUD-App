import React, { useState } from "react";
import axios from "axios";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import styles from "styled-components";

const AddArticle = () => {
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  const url = "http://localhost:8080/";

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
      .post(`${url}articles/add`, articles)
      .then(res => console.log(res.data))
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <AddArticleContainer>
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
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Submit"
            label=""
          />
        </Form>
      </div>
    </AddArticleContainer>
  );
};

export default AddArticle;

const AddArticleContainer = styles.div`
margin: 3rem auto;
padding: 4rem;
width: 31 rem;

`;
