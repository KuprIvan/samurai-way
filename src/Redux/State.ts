import {FC} from 'react';
import {v1} from "uuid";
import {rerenderEntireTree} from "../render";

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
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
}
export type StateDataType = {
    profilePage: ProfilePageType
    messagesPage: DialogsPageType
}

const state: StateDataType = {
    profilePage: {
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
}

export const addPost = (postMessage: string): void => {
    const newPost: PostType = {id: v1(), message:  postMessage, likesCount: 0}
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state