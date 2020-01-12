import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore , applyMiddleware , compose, combineReducers} from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import {cityReducer, fetchReducer} from './reducers/fetchReducer';
import wishReducer from './reducers/wishReducer';
import subjectReducer from './reducers/subjectReducer';
import laptopReducer from './reducers/laptopReducer';
import {mailReducer} from "./reducers/fetchReducer";


const masterReducer = combineReducers({
    name: fetchReducer,
    wish: wishReducer,
    sub: subjectReducer,
    laptop: laptopReducer,
    email: mailReducer,
    city:cityReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(masterReducer,{name:'zubair',email:'zubairfloat@gmail.com',city:'', laptop:['My Laptop'], wish:['eat', 'sleep'], sub:['Object Oriented']}, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}> <App/> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
