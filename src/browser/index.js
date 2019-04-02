import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../shered/app/Redux/store'
import jwt from 'jsonwebtoken'
import {setAuthorizationToken, setCurrentUser, setCart, getCart} from '../shered/app/Redux/actions'
import Main from '../shered/app/main'
import '../shered/app/main.scss'

if(localStorage.jwt) {
    setAuthorizationToken(localStorage.jwt);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwt)))
    store.dispatch(setCart(jwt.decode(localStorage.jwt)))
    store.dispatch(getCart())
}

hydrate (
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);






