import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Label, Popup } from "semantic-ui-react";

export const DeleteButton = ({ posts, deleteArticle }) => {
  const { articles } = posts;

  return (
    <Popup
      content="Delete Item"
      position="right center"
      style={{ color: "red" }}
      trigger={
        <Button as="div" labelPosition="right" floated={"right"}>
          <Button
            inverted
            color="red"
            onClick={() => deleteArticle(articles._id)}
          >
            <Icon name="delete" />
          </Button>
          <Label as="a" basic color="red" pointing="left"></Label>
        </Button>
      }
    />
  );
};

export const EditButton = () => {
  return (
    <Popup
      content="Edit Item"
      position="right center"
      style={{ color: "green" }}
      trigger={
        <Button as="div" labelPosition="left" floated="left">
          <Button inverted color="green">
            <Icon name="edit outline" />
          </Button>
          <Label as="a" basic color="green" pointing="left"></Label>
        </Button>
      }
    />
  );
};

export const BackButton = () => {
  return (
    <Link to="/">
      <Button>Back</Button>
    </Link>
  );
};
