import {v1} from "uuid";

export type DialogItemType = {
    id: number
    name: string
}
export type MessageItemType = {
    id: string
    message: string
}

type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    newMessageBody: string
}

const updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY'
const sendNewMessageBody = 'SEND-NEW-MESSAGE-BODY'

export type MessageReducerActionTypes = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendNewMessageBodyAC>

export type InitialStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Denis'},
        {id: 4, name: 'Ihor'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Petr'},
    ] as Array<DialogItemType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Bye'},
    ] as Array<MessageItemType>,
    newMessageBody: '',
}

const dialogsPageReducer = (state: InitialStateType = initialState, action: MessageReducerActionTypes): InitialStateType => {
    switch (action.type) {
        case updateNewMessageBody:
            state.newMessageBody = action.payload.newMessageText;

            return state;
        case sendNewMessageBody:
            let body = state.newMessageBody;

            const newMessage: MessageItemType = {
                id: v1(),
                message: body
            }

            state.messages.push(newMessage);
            state.newMessageBody = '';

            return state;
        default:
            return state;
    }
};
export const updateNewMessageBodyAC = (newMessageText: string) => ({
    type: updateNewMessageBody,
    payload: {
        newMessageText: newMessageText
    }
}) as const
export const sendNewMessageBodyAC = () => ({type: sendNewMessageBody}) as const


export default dialogsPageReducer;