import React from "react";
import { Card, Grid } from "semantic-ui-react";

const PostCard = ({ articles }) => {
  const { article, title, authorName } = articles;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{authorName}</Card.Meta>
        <Card.Description>{article}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
