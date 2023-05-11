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
import {ActionTypes} from "./Redux/store";
import {RootStore} from "./Redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type PropsType =  {
    store: RootStore
    dispatch: (action: ActionTypes) => void
}

const App: FC<PropsType> = (props) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs'
                           render={() => <Dialogs state={state.messagesPage} dispatch={props.store.dispatch.bind(props.store)} />}/>  */}

                    <Route path='/dialogs'
                           render={() => <DialogsContainer store={props.store} />}/>

                    <Route path='/profile'
                           render={() => <Profile store={props.store} />}/>



                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}



export default App;
