import React, { useState } from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState({
    activeItem: "home"
  });

  const handleItemClick = (e, { name }) => setActive({ activeItem: name });

  const { activeItem } = active;

  return (
    <div style={{ paddingBottom: "1rem" }}>
      <Container>
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />

          <Menu.Item
            name="new article"
            active={activeItem === "new article"}
            onClick={handleItemClick}
            as={Link}
            to="/add_new"
          />

          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  );
};

export default Navbar;
