import React, { useState } from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div style={{ paddingBottom: "2rem" }}>
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
            name="add_new"
            active={activeItem === "add_new"}
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
