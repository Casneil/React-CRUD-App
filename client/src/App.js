import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Router from "./components/Router";

const App = () => {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/articles")
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Router posts={post} />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default App;
