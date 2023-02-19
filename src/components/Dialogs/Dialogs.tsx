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

    const dialogsData = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Denis'},
        {id: 4, name: 'Ihor'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Petr'},
    ]

    const messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Bye'},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={s.messages}>
                <MessageItem message={messagesData[0].message} id={messagesData[0].id}/>
                <MessageItem message={messagesData[1].message} id={messagesData[1].id}/>
                <MessageItem message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    );
};

export default Dialogs;