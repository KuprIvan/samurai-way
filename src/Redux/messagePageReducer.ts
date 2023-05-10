import {v1} from "uuid";
import {DialogsPageType, MessageItemType} from "./store";

const updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY'
const sendNewMessageBody = 'SEND-NEW-MESSAGE-BODY'

export type MessageReducerActionTypes = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendNewMessageBodyAC>

let initialState: DialogsPageType = {
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
}

const messagePageReducer = (state = initialState, action: MessageReducerActionTypes) => {
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


export default messagePageReducer;