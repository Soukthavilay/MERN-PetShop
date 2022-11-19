import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './products/Products';
import DetailProduct from './detailProduct/DetailProduct';
import Login from './auth/Login';
import Register from './auth/Register';
import OrderHistory from './history/OrderHistory';
import OrderDetails from './history/OrderDetails';
import Cart from './cart/Cart';
import NotFound from './utils/not_found/NotFound';
import Categories from './categories/Categories';
import CreateProduct from './createProduct/CreateProduct';
import Type from './type/Type';
import UserInfo from './auth/UserInfo';

import { GlobalState } from '../../GlobalState';
import { Home } from './home/Home';
import { About } from './about/About';
import { Contact } from './contact/Contact';

function Pages() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/products" exact component={Products} />
      <Route path="/detail/:id" exact component={DetailProduct} />

      <Route path="/login" exact component={isLogged ? NotFound : Login} />
      <Route
        path="/register"
        exact
        component={isLogged ? NotFound : Register}
      />
      <Route path="/infor" exact component={isLogged ? UserInfo : NotFound} />

      <Route
        path="/category"
        exact
        component={isAdmin ? Categories : NotFound}
      />
      <Route path="/type" exact component={Type} />
      <Route
        path="/create_product"
        exact
        component={isAdmin ? CreateProduct : NotFound}
      />
      <Route
        path="/edit_product/:id"
        exact
        component={isAdmin ? CreateProduct : NotFound}
      />

      <Route
        path="/history"
        exact
        component={isLogged ? OrderHistory : NotFound}
      />
      <Route
        path="/history/:id"
        exact
        component={isLogged ? OrderDetails : NotFound}
      />

      <Route path="/cart" exact component={Cart} />

      <Route path="*" exact component={NotFound} />
    </Switch>
  );
}

export default Pages;
