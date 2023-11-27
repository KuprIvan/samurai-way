import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

export type MessageDataType = {
    id: string
    name: string
}

export type DialogDataType = {
    id: string
    name: string
}

export type PostsDataType = {
    id: string
    message: string
    likesCount: number
}

const postsData: PostsDataType[] = [
    {id: "1", message: "Hi, how are you?", likesCount: 15},
    {id: "2", message: "It's my first post", likesCount: 25}
]


const DialogData: DialogDataType[] = [
    {id: "1", name: "Ivan"},
    {id: "2", name: "Nastya"},
    {id: "3", name: "Denis"},
    {id: "4", name: "Ihor"},
    {id: "5", name: "Sveta"},
]
const MessageData: MessageDataType[] = [
    {id: "1", name: "Ivan"},
    {id: "2", name: "Nastya"},
    {id: "3", name: "Denis"},
    {id: "4", name: "Ihor"},
    {id: "5", name: "Sveta"},
]

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile
                        posts={postsData}
                    />}
                    />
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogs={DialogData}
                        messages={MessageData}/>}
                    />
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
