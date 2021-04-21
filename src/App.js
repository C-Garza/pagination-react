import React from "react";
import styles from "./App.module.css"
import Feed from "./components/Feed";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Feed} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;