import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "styled-components";
import { Card, Grid, Image, Header } from "semantic-ui-react";
import { BackButton } from "./Buttons";

import Loading from "./Loading";

const Article = ({ match }) => {
  const [article, setArticle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");

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

  if (title <= 0 || article <= 0 || authorName <= 0) return <Loading />;

  return (
    <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
      <Card fluid={true}>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />

          <Header as="h2">
            <Card.Header>{title}</Card.Header>
          </Header>

          {/* <Header as="h4"> */}
          <Card.Meta>{authorName}</Card.Meta>
          {/* </Header> */}
          <Card.Description>{article}</Card.Description>
          <br />
        </Card.Content>
      </Card>
      <BackButton />
    </div>
  );
};

export default Article;
