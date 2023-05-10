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
import {ActionTypes, StoreType} from "./Redux/store";
import {AppReduxStateType, RootStore} from "./Redux/redux-store";


type PropsType =  {
    state: RootStore
    dispatch: (action: ActionTypes) => void
   /* addPost: () => void
    updateNewPostText: (newText: string) => void*/
}

const App: FC<PropsType> = (props) => {
    const state = props.state.getState()

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={state.profilePage}
                               dispatch={props.state.dispatch.bind(props.state)}

                           />}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={state.messagesPage} dispatch={props.state.dispatch.bind(props.state)} />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}



export default App;
