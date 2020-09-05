import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Appbar from "./AppBar/AppBar";
import NotFound from "./Components/Warning/NotFound";
import { Switch, Route } from "react-router-dom";
import Posts from "./Components/Posts/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  console.log(posts);
  return (
    <>
      <Appbar></Appbar>
      <Posts posts={posts}></Posts>

      <Switch>
        <Route exact path="/"></Route>
        <Route path="/*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </>
  );
}

export default App;
