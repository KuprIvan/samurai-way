import React, {FC} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/Message';
import {DialogItemType, DialogsPageType, MessageItemType} from '../../Redux/State';

type DialogsDataType = {
    state: DialogsPageType

}

const Dialogs: FC<DialogsDataType> = (props): JSX.Element => {


    const dialogs = props.state.dialogs.length
        ? props.state.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id} />))
        : <div>Your list is empty</div>

    const messageElements = props.state.messages.length
        ? props.state.messages.map(m => (<MessageItem key={m.id} message={m.message} id={m.id} />))
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