import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogItemType = {
    id: number
    name: string
}

type MessageItemType = {
    message: string
    id: number
}
const DialogItem: FC<DialogItemType> = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem: FC<MessageItemType> = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


const Dialogs = (props: any) => {
    let dialogsData: Array<DialogItemType> = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Denis'},
        {id: 4, name: 'Ihor'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Petr'},
    ]
    let messages: Array<MessageItemType> = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Bye'},
    ]

    const dialogs = dialogsData.length
        ? dialogsData.map(d => (<DialogItem key={d.id} name={d.name} id={d.id} />))
        : <div>Your list is empty</div>

    const messageElements = messages.length
        ? messages.map(m => (<MessageItem key={m.id} message={m.message} id={m.id} />))
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