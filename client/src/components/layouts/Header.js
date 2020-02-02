import React from "react";
import styles from "styled-components";

const Header = () => {
  return (
    <MainContainer>
      <h1>Just Write!</h1>
    </MainContainer>
  );
};

export default Header;

// /*******Styles********/
const MainContainer = styles.header`
  background: url(../../images/backround.jpg) no-repeat center/cover;
  height: 25rem;

  h1{
      transform: translate(-50%, -50%);
      color: #fff;
      font-weight:500;
      position: absolute;
      top:12.5%;
      left:50%;
      font-family:"Montserrat", sans-serif;
      
  }
`;
