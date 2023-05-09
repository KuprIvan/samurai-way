import {v1} from "uuid";
import {DialogsPageType, MessageItemType} from "./state";

const updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY'
const sendNewMessageBody = 'SEND-NEW-MESSAGE-BODY'

export type MessageReducerActionTypes = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendNewMessageBodyAC>

const messagePageReducer = (state: DialogsPageType, action: MessageReducerActionTypes) => {
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