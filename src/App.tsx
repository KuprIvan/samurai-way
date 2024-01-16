import React, {FC} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {StateDataType} from "./redux/state";
import SideBarMenu from "./components/SideBar/SideBar";


type AppDataType = {
    state: StateDataType
    updateNewPostText: (newText: string) => void
    addPost: (postMessage: string) => void
}

const App: FC<PropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               newPostText={props.state.profilePage.newPostText}
                               updateNewPostText={props.updateNewPostText}
                               addPost={props.addPost}
                           />}
                    />
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}
                    />
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>
                <div>
                    <SideBarMenu state={props.state.sideBarMenu}/>
                </div>
            </div>
        </BrowserRouter>
    );
}



export default App;
