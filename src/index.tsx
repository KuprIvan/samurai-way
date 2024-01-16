import './index.css';
import store, {StateDataType} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let rerenderEntireTree = (state: StateDataType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);