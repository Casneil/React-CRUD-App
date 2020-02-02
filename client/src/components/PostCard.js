import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";

import { EditButton, DeleteButton } from "./Buttons";

const PostCard = ({ articles }) => {
  const { article, title, authorName } = articles;
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{authorName}</Card.Meta>
        <Card.Description>{article}</Card.Description>
        <br />
        <EditButton />
        <DeleteButton />
      </Card.Content>
    </Card>
  );
};

export default PostCard;
