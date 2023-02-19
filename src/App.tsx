import React, {FC} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {PostType} from './components/Profile/MyPosts/Post/Post';
import {DialogItemType, MessageItemType} from './index';

type AppDataType = {
    posts: Array<PostType>
    messages: Array<MessageItemType>
    dialogs: Array<DialogItemType>
}

const App:FC<AppDataType> = (props): JSX.Element => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={props.posts}/> }/>
                    <Route path='/dialogs' render={() => <Dialogs messages={props.messages} dialogs={props.dialogs}/> }/>
                    <Route path='/news' render={() => <News /> }/>
                    <Route path='/music' render={() => <Music /> }/>
                    <Route path='/settings' render={() => <Settings /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
