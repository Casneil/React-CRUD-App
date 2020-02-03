import React from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Image, Header } from "semantic-ui-react";

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
        <EditButton />
        <DeleteButton />
      </Card.Content>
    </Card>
  );
};

export default PostCard;
