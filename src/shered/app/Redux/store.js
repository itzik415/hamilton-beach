import { rootReducer } from './reducer';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";

// const preloadedState = global.window.__PRELOADED_STATE__;
// delete window.__PRELOADED_STATE__;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, applyMiddleware(thunk));
