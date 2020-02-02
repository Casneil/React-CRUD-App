import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState({
    activeItem: "home"
  });

  const handleItemClick = (e, { name }) => setActive({ activeItem: name });

  const { activeItem } = active;

  return (
    <div style={{ paddingBottom: 10 }}>
      <Menu pointing secondary>
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
        </Link>
        <Link to="/add_new">
          <Menu.Item
            name="new article"
            active={activeItem === "new article"}
            onClick={handleItemClick}
          />
        </Link>
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
    </div>
  );
};

export default Navbar;
