import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Basket from './pages/basket/basket';
import ShopPage from './pages/shop/ShopPage';
import Item from './pages/item/item';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={ShopPage} />
          <Route path="/basket" component={Basket}/>
          <Route path="/item/:id" component={Item} />
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
