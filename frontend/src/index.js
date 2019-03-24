import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import './main.scss';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import jwt from 'jsonwebtoken';
import {setAuthorizationToken, setCurrentUser, setCart, getCart} from './Redux/actions';

if(localStorage.jwt) {
    setAuthorizationToken(localStorage.jwt);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwt)))
    store.dispatch(setCart(jwt.decode(localStorage.jwt)))
    store.dispatch(getCart())
}

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>, document.getElementById('root')
);
