import React from 'react';
import "./Assets/less/app.less";
import {BrowserRouter, Route, Link, Switch, RouteComponentProps} from 'react-router-dom';
import {HomePage} from "./Pages/HomePage";
import {AddPage} from "./Pages/AddPage";
import {NotFoundPage} from "./Pages/NotFoundPage";
import {LatestPage} from "./Pages/LatestPage";
import {SettingsContextProvider} from "./Contexts/SettingsContext";
import {TestAuthPage} from "./Pages/TestAuthPage";

function App() {
  return (
    <>
      <SettingsContextProvider>
      <div className="app">
        <header className="">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
          <h1>Home Finance Assistant</h1>
        </header>
        <BrowserRouter>
          <div className="navbar">
            <nav className="collapse navbar-collapse show">
              <ul className="main-menu navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/add" className="nav-link">Add</Link>
                </li>
                <li className="nav-item">
                  <Link to="/latest" className="nav-link">Latest</Link>
                </li>
                <li className="nav-item">
                  <Link to="/auth" className="nav-link">Test auth</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route exact path="/" render={() => (<HomePage />)} />
            <Route exact path="/add" render={() => (<AddPage />)} />
            <Route exact path="/latest" render={() => (<LatestPage />)} />
            <Route exact path="/auth" render={(props: RouteComponentProps) => (<TestAuthPage {...props}/>)} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
      </SettingsContextProvider>
    </>
  );
}

export default App;
