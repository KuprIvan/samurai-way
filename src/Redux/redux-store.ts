import {combineReducers, createStore, Store} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./messagePageReducer";
import {ActionTypes} from "./store";


export type RootStore = Store<AppReduxStateType, ActionTypes>
// export type RootStore = typeof store

export type AppReduxStateType = ReturnType<typeof reducers>
export const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
});


const store = createStore(reducers);


export default store;