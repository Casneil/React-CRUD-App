import React from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Image, Header, Container } from "semantic-ui-react";

import { EditButton, DeleteButton } from "./Buttons";

const PostCard = ({ articles, deleteArticle }) => {
  const { article, title, authorName } = articles;

  return (
    <Container>
      <Card fluid={true}>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />

          <Header
            as="h2"
            as={Link}
            to={{ pathname: `/article/${articles._id}` }}
          >
            <Card.Header>{title}</Card.Header>
          </Header>

          {/* <Header as="h4"> */}
          <Card.Meta>{authorName}</Card.Meta>
          {/* </Header> */}
          <Card.Description>{article}</Card.Description>
          <br />
        </Card.Content>
      </Card>

      <DeleteButton posts={{ articles }} deleteArticle={deleteArticle} />

      <EditButton link={{ pathname: `articles/update/${articles._id}` }} />
    </Container>
  );
};

export default PostCard;
