import {combineReducers, createStore, Store} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";
import {ActionTypes} from "./store";

/*export type StoreType = {
    _state: StateDataType
    getState: () => StateDataType
    _callSubscriber: (state: any) => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionTypes) => void
}*/

export type RootStore = Store<AppReduxStateType, ActionTypes>

export type AppReduxStateType = ReturnType<typeof reducers>
export const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagePageReducer,
    // sidebar: sidebarReducer
});


const store:RootStore = createStore(reducers);


export default store;