import { createStore, applyMiddleware, compose } from "redux";
import gifs from '../reducers/gifs';
import thunk from 'redux-thunk';


const store=createStore(
    gifs,
    compose( applyMiddleware(thunk)) 
)

export default store;