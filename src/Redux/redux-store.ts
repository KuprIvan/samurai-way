import {combineReducers, createStore, Store} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./messagePageReducer";
import {ActionTypes} from "./store";


export type RootStore = Store<AppStateType, ActionTypes>
// export type RootStore = typeof store

export const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>


const store = createStore(rootReducer);


export default store;