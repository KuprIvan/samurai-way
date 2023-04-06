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
import {updateNewPostText, StateDataType} from './Redux/State';
import {addPost} from './Redux/State'

type AppDataType = {
    state: StateDataType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const App: FC<AppDataType> = (props): JSX.Element => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               addTextAreaLetter={props.updateNewPostText}
                           />}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.messagesPage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
