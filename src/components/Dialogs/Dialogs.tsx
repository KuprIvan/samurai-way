import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessageItem} from "./Message/MessageItem";
import {DialogDataType, MessageDataType} from "../../App";


type DialogsPropType = {
    dialogs: DialogDataType[]
    messages: MessageDataType[]
}

const Dialogs: FC<DialogsPropType> = ({dialogs, messages}) => {
    const dialogsElements = dialogs
        .map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = messages
        .map(m => <MessageItem key={m.id} message={m.name}></MessageItem>)

    return <>
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    </>
};

export default Dialogs;