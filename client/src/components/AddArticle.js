import React, { useState } from "react";
import axios from "axios";
import { Form, Input, TextArea, Container } from "semantic-ui-react";

import { SubmitButton } from "./Buttons";

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
    <Container>
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
        <SubmitButton />
      </Form>
    </Container>
  );
};

export default AddArticle;
