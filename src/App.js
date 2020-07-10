import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Posts from "./components/posts";
import Post from "./components/post";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/posts/:id" exact component={Post} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
