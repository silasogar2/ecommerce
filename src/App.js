import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header-component';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
