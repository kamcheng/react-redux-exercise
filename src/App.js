import React from 'react';
import './App.css';
import Counter from './components/Counter';
import UserName from './components/UserName';

import Home from './components/Home';
import Assessment from './components/Assessment';

import {
  Route,
  HashRouter
} from "react-router-dom";

const App = () => {
  return (
  <HashRouter>
    <div className="App">
      <UserName></UserName>
      <Counter></Counter>
      <Route exact path="/" component={Home}/>
      <Route path="/assessment" component={Assessment}/>
    </div>
   </HashRouter>
  )
}
export default App;
