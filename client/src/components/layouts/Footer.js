import React from "react";
import { Menu } from "semantic-ui-react";
import styles from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Menu inverted></Menu>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styles.footer`

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%
`;
