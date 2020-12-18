import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Basket from './pages/basket/basket';
import ShopPage from './pages/shop/ShopPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Route path="/basket" component={Basket}/>
      <Route path="/" exact component={ShopPage} />
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
