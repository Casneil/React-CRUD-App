import React from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Image, Header } from "semantic-ui-react";

import { EditButton, DeleteButton } from "./Buttons";

const PostCard = ({ articles, deleteArticle }) => {
  const { article, title, authorName } = articles;
  return (
    <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
      <Card fluid={true}>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Link to={{ pathname: `/article/${articles._id}` }}>
            <Header as="h2">
              <Card.Header>{title}</Card.Header>
            </Header>
          </Link>
          {/* <Header as="h4"> */}
          <Card.Meta>{authorName}</Card.Meta>
          {/* </Header> */}
          <Card.Description>{article}</Card.Description>
          <br />
        </Card.Content>
      </Card>

      <DeleteButton posts={{ articles }} deleteArticle={deleteArticle} />
      <Link to={{ pathname: `articles/update/${articles._id}` }}>
        <EditButton />
      </Link>
    </div>
  );
};

export default PostCard;
