import React, { Fragment } from "react";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Footer />
    </Fragment>
  );
};

export default App;
