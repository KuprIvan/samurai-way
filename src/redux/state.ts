import {v1} from "uuid";

export type MessageDataType = {
    id: string
    name: string
}

export type DialogDataType = {
    id: string
    name: string
}

export type Friend = {
    id: string
    name: string
}

export type SideBarMenuType = {
    friends: Friend[]
}

export type PostsDataType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsDataType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogDataType[],
    messages: MessageDataType[]
}

export type StateDataType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBarMenu: SideBarMenuType
}

export type StoreType = {
    _state: StateDataType,
    _callSubscriber: (observer: any) => void,
    addPost: (postMessage: string) => void,
    updateNewPostText: (newText: string) => void,
    subscribe: (observer: any) => void,
    getState: () => StateDataType
}


let store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: "1", name: "Ivan"},
                {id: "2", name: "Nastya"},
                {id: "3", name: "Denis"},
                {id: "4", name: "Ihor"},
                {id: "5", name: "Sveta"},
            ],
            messages: [
                {id: "1", name: "Ivan"},
                {id: "2", name: "Nastya"},
                {id: "3", name: "Denis"},
                {id: "4", name: "Ihor"},
                {id: "5", name: "Sveta"},
            ]
        },
        profilePage: {
            posts: [
                {id: "1", message: "Hi, how are you?", likesCount: 15},
                {id: "2", message: "It's my first post", likesCount: 25}
            ],
            newPostText: ''
        },
        sideBarMenu: {
            friends: [
                {id: "1", name: "Ivan"},
                {id: "2", name: "Nastya"},
                {id: "3", name: "Denis"},
                {id: "4", name: "Ihor"},
                {id: "5", name: "Sveta"},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber(observer: any) {
        console.log('State changed' !)
    },
    addPost(postMessage: string) {
        const newMessage: PostsDataType = {
            id: v1(),
            message: postMessage,
            likesCount: 1
        }
        let copyState = {...this._state}
        this._callSubscriber(this._state);
        this._state.profilePage.newPostText = '';
        return copyState.profilePage.posts.push(newMessage)
    },
    updateNewPostText(newText: string)  {
       this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    }
}

window.store = store;
export default store;