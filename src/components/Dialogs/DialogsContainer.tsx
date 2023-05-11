import React, {ChangeEvent, FC, useRef} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/Message';
import {sendNewMessageBodyAC, updateNewMessageBodyAC} from "../../Redux/messagePageReducer";
import {RootStore} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";

type DialogsDataType = {
    store: RootStore
}

const DialogsContainer: FC<DialogsDataType> = (props): JSX.Element => {
    let state = props.store.getState().messagesPage;
    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body));
    }
    const onSendMessageClick = () => {
        props.store.dispatch(sendNewMessageBodyAC())
    }

    return <Dialogs store={props.store} updateMessage={onNewMessageChange} sendMessage={onSendMessageClick} messagePage={state}/>;
};

export default DialogsContainer;