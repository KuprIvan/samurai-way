import {v1} from "uuid";

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
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostTest: string
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
}
export type StateDataType = {
    profilePage: ProfilePageType
    messagesPage: DialogsPageType
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

//
// type ChangeNewTextActionType = {
//     type: "UPDATE-NEW-POST-TEXT"
//     payload: {
//         newText: string
//     }
// }
export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof onPostChangeAC>

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

export const addPostAC = () => ({ type: addPost }) as const
export const onPostChangeAC = (newText: string) => ({
    type: updateNewPostText,
    payload: {
        newText: newText
    }
}) as const



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
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Bye'},
            ]
        },
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
        if (action.type === addPost) {
            const newPost: PostType = {
                id: v1(),
                message: this._state.profilePage.newPostTest,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostTest = ''
            this._onChange()
        } else if (action.type === updateNewPostText) {
            this._state.profilePage.newPostTest = action.payload.newText
            this._onChange()
        }
    },
   /* addPost() {
        const newPost: PostType = {
            id: v1(),
            message: this._state.profilePage.newPostTest,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostTest = ''
        this.onChange()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostTest = newText
        this.onChange()
    },*/

}
//
// type AddPostActionType = {
//     type: "ADD-POST"
// }



// const res = (window as any).store

export default store

