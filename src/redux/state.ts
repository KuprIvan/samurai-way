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

let rerenderEntireTree = (observer: any) => {
    console.log('State changed' !)
}


const state: StateDataType = {
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
}


export let addPost = (postMessage: string) => {
    const newMessage: PostsDataType = {
        id: v1(),
        message: postMessage,
        likesCount: 1
    }
    let copyState = {...state}
    rerenderEntireTree(state);
    state.profilePage.newPostText = '';
    return copyState.profilePage.posts.push(newMessage)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer;
}
window.state = state;

export default state;