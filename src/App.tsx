import React from 'react';
import "./Assets/less/app.less";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import {HomePage} from "./Pages/HomePage";
import {AddPage} from "./Pages/AddPage";
import {NotFound} from "./Pages/NotFound";

function App() {
  return (
    <div className="app">
      <header className="">
        Home Finance Assistant
      </header>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" render={() => (<HomePage />)} />
          <Route exact path="/add" render={() => (<AddPage />)} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
