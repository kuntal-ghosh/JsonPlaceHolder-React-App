import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Appbar from "./AppBar/AppBar";
import NotFound from "./Components/Warning/NotFound";
import { Switch, Route } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => setPosts);
  return (
    <>
      <Appbar></Appbar>

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
