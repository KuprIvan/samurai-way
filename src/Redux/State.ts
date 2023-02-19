import {FC} from 'react';

export type PostType = {
    id: number
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

/*
const postsData: Array<PostType> = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first post', likesCount: 23},
]
const dialogsData: Array<DialogItemType> = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Nastya'},
    {id: 3, name: 'Denis'},
    {id: 4, name: 'Ihor'},
    {id: 5, name: 'Sveta'},
    {id: 6, name: 'Petr'},
]
const messages: Array<MessageItemType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Bye'},
]
*/

export type StateDataType = {
    profilePage: ProfilePageType
   messagesPage: DialogsPageType
}

const state: StateDataType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 23},
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

export default state