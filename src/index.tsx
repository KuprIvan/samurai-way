import './index.css';
import state, {addPost, StateDataType, subscribe, updateNewPostText} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let rerenderEntireTree = (state: StateDataType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);