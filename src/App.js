import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Appbar from "./AppBar/AppBar";
import NotFound from "./Components/Warning/NotFound";
import { Switch, Route } from "react-router-dom";
import Posts from "./Components/Posts/Posts";
import PostDetails from "./Components/Posts/Post/PostDetails/PostDetails";

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
      {/* <Posts posts={posts}></Posts> */}

      <Switch>
        <Route path="/posts/:id">
          <PostDetails></PostDetails>
        </Route>

        <Route path="/posts">
          <Posts posts={posts}></Posts>
        </Route>

        <Route
          path="/"
          render={() => (
            <h1 style={{ textAlign: "center" }}>
              welcome to post app, click posts to see posts
            </h1>
          )}
        ></Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </>
  );
}

export default App;
