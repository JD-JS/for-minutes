import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./container/Main";
import MinutesList from "./container/MinutesList";
import Post from "./container/Post";
import About from "./container/About";
import Detail from "./container/Detail";
import Result from "./container/Result";
import Update from "./container/Update";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/post/" component={Post} />
          <Route exact path="/about/" component={About} />
          <Route exact path="/minutes/" component={MinutesList} />
          <Route exact path="/minute/:id/" component={Detail} />
          <Route exact path="/minute/update/:id/" component={Update} />
        </div>
      </Router>
    );
  }
}

export default App;
