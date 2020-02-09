import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const IndexPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Index Page
        </a>
      </header>
    </div>
  );
}

const HelloPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Page
        </a>
      </header>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><IndexPage /></Route>
        <Route exact path="/hello"><HelloPage /></Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
