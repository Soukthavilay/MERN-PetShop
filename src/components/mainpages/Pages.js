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
import Revenue from './revenue/Revenue';
import Checkout from './checkout/Checkout';
import Processed from './processed/Processed';
import Comment from './processed/Comment';
import Profile from './auth/Profile';
import MyFeedback from './myfeedback/MyFeedback';
import Loading from './utils/loading/Loading';

function Pages() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/comment/:id" exact component={Comment} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/products" exact component={Products} />
      <Route path="/detail/:id" exact component={DetailProduct} />
      <Route
        path="/processed"
        exact
        component={isLogged ? Processed : Loading}
      />

      <Route path="/login" exact component={isLogged ? Loading : Login} />
      <Route path="/profile" exact component={isLogged ? Profile : Loading} />
      <Route
        path="/myfeedback"
        exact
        component={isLogged ? MyFeedback : Loading}
      />
      <Route path="/register" exact component={isLogged ? Loading : Register} />
      <Route path="/infor" exact component={isLogged ? UserInfo : Loading} />

      <Route
        path="/category"
        exact
        component={isAdmin ? Categories : Loading}
      />
      <Route path="/type" exact component={Type} />
      <Route
        path="/create_product"
        exact
        component={isAdmin ? CreateProduct : Loading}
      />
      <Route
        path="/edit_product/:id"
        exact
        component={isAdmin ? CreateProduct : Loading}
      />

      <Route
        path="/history"
        exact
        component={isLogged ? OrderHistory : Loading}
      />
      <Route path="/revenue" exact component={isAdmin ? Revenue : Loading} />

      <Route
        path="/history/:id"
        exact
        component={isLogged ? OrderDetails : Loading}
      />

      <Route path="/cart" exact component={Cart} />
      <Route
        path="/checkout"
        exact
        component={isLogged ? Checkout : Loading}
      />

      <Route path="*" exact component={NotFound} />
    </Switch>
  );
}

export default Pages;
