import {v1} from "uuid";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";
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
    newPostTest: string
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
    // updateNewPostText: (newText: string) => void
    // addPost: () => void
    getState: () => StateDataType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof onPostChangeAC> | ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendNewMessageBodyAC>

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY'
const sendNewMessageBody = 'SEND-NEW-MESSAGE-BODY'

export const addPostAC = () => ({ type: addPost }) as const
export const onPostChangeAC = (newText: string) => ({
    type: updateNewPostText,
    payload: {
        newText: newText
    }
}) as const
export const updateNewMessageBodyAC = (newMessageText: string) => ({
    type: updateNewMessageBody,
    payload: {
        newMessageText: newMessageText
    }
}) as const
export const sendNewMessageBodyAC = () => ({ type: sendNewMessageBody }) as const



const store: StoreType = {
    _state: {
        profilePage: {
            newPostTest: "",
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

        // switch (action.type) {
        //     case addPost:
        //         const newPost: PostType = {
        //             id: v1(),
        //             message: this._state.profilePage.newPostTest,
        //             likesCount: 0
        //         }
        //         this._state.profilePage.posts.push(newPost)
        //         this._state.profilePage.newPostTest = ''
        //         this._onChange()
        //     break;
        //     case updateNewPostText:
        //         this._state.profilePage.newPostTest = action.payload.newText
        //         this._onChange()
        //         break;
        //     case updateNewMessageBody:
        //         this._state.messagesPage.newMessageBody = action.payload.newMessageText
        //         this._onChange()
        //         break;
        //     case sendNewMessageBody:
        //         let body = this._state.messagesPage.newMessageBody
        //         const newMessage: MessageItemType= {
        //             id: v1(),
        //             message: body
        //         }
        //         this._state.messagesPage.messages.push(newMessage)
        //         this._state.messagesPage.newMessageBody = ''
        //         this._onChange()
        //         break;
        //
        // }
    },
}




// const res = (window as any).store

export default store

