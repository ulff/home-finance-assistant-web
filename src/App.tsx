import React from 'react';
import "./Assets/less/app.less";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import {HomePage} from "./Pages/HomePage";
import {AddPage} from "./Pages/AddPage";
import {NotFoundPage} from "./Pages/NotFoundPage";
import {LatestPage} from "./Pages/LatestPage";

function App() {
  return (
    <div className="app">
      <header className="">
        <h1>Home Finance Assistant</h1>
      </header>
      <BrowserRouter>
        <div>
          <nav>
            <ul className="main-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
              <li>
                <Link to="/latest">Latest</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" render={() => (<HomePage />)} />
          <Route exact path="/add" render={() => (<AddPage />)} />
          <Route exact path="/latest" render={() => (<LatestPage />)} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
