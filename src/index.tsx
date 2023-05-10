import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store, {AppReduxStateType} from "./Redux/redux-store";
import {StateDataType, StoreType} from "./Redux/store";


let rerenderEntireTree = (state: AppReduxStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
})