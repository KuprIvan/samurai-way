import {v1} from "uuid";
import profilePageReducer, {addPostAC, onPostChangeAC, ProfileReducerActionTypes} from "./profilePageReducer";
import messagePageReducer, {
    MessageReducerActionTypes,
    sendNewMessageBodyAC,
    updateNewMessageBodyAC
} from "./messagePageReducer";
import sidebarReducer from "./sidebarReducer";

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DialogItemType = {
    id: number
    name: string
}
export type MessageItemType = {
    id: string
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    newMessageBody: string
}
export type StateDataType = {
    profilePage: ProfilePageType
    messagesPage: DialogsPageType
    sidebar: {  }
}
export type StoreType = {
    _state: StateDataType
    getState: () => StateDataType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ProfileReducerActionTypes & MessageReducerActionTypes

const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 15},
                {id: v1(), message: 'It\'s my first post', likesCount: 23},
            ],
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Nastya'},
                {id: 3, name: 'Denis'},
                {id: 4, name: 'Ihor'},
                {id: 5, name: 'Sveta'},
                {id: 6, name: 'Petr'},
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Bye'},
            ],
            newMessageBody: '',
        },
        sidebar: {}
    },
    _onChange() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._onChange = callback
    },
    dispatch(action) { // { type: 'ADD-POST', payload: {} }
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.messagesPage = messagePageReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._onChange()
    },
}

// const res = (window as any).store

export default store

