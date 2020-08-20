import React from 'react';
import { Switch, Route } from "react-router-dom"

import Header from './components/Header';
import CountryList from "./pages/CountryList";
import CountryCart from "./pages/CountryCart";
import CountryInfo from "./pages/CountryInfo";
import './App.css';

function App() {    
  return (
      <div>
          <Header />
          <Switch>
            <Route exact path = "/">
                  <CountryList />  
            </Route>
            <Route path = "/cart">
                  <CountryCart />
            </Route>
            <Route path = "/:imgId">
                   <CountryInfo />
            </Route>
          </Switch>
      </div>
  )
}

export default App


