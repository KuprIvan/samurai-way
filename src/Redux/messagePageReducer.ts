import {v1} from "uuid";
import {ActionTypes, DialogsPageType, MessageItemType, PostType} from "./State";

const updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY'
const sendNewMessageBody = 'SEND-NEW-MESSAGE-BODY'
const messagePageReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.type) {
        case updateNewMessageBody:
            state.newMessageBody = action.payload.newMessageText
            return state;
        case sendNewMessageBody:
            let body = state.newMessageBody
            const newMessage: MessageItemType = {
                id: v1(),
                message: body
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state;
        default:
            return state;
    }
};

export default messagePageReducer;