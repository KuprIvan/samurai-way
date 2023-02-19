import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItemType, MessageItemType} from '../../index';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/Message';

type DialogsDataType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
}

const Dialogs: FC<DialogsDataType> = (props): JSX.Element => {


    const dialogs = props.dialogs.length
        ? props.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id} />))
        : <div>Your list is empty</div>

    const messageElements = props.messages.length
        ? props.messages.map(m => (<MessageItem key={m.id} message={m.message} id={m.id} />))
        : <div>Your list is empty</div>


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;