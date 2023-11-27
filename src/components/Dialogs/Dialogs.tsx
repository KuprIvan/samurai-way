import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogItemType = {
    id: string
    name: string
}

type MessageItemType = {
    message: string
}

type DialogDataType = {
    id: string
    name: string
}
type MessageDataType = {
    id: string
    name: string
}


const DialogItem: FC<DialogItemType> = (props) => {
    let path = `/dialogs/${props.id}`;

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

const Dialogs = () => {

    const DialogData: DialogDataType[] = [
        {id: "1", name: "Ivan"},
        {id: "2", name: "Nastya"},
        {id: "3", name: "Denis"},
        {id: "4", name: "Ihor"},
        {id: "5", name: "Sveta"},
    ]

    const dialogs = DialogData.map( d => <DialogItem key={d.id} id={d.id} name={d.name} />)

    const MessageData: MessageDataType[] = [
        {id: "1", name: "Ivan"},
        {id: "2", name: "Nastya"},
        {id: "3", name: "Denis"},
        {id: "4", name: "Ihor"},
        {id: "5", name: "Sveta"},
    ]
    const messages = MessageData.map( m => <MessageItem key={m.id} message={m.name}></MessageItem>)

    return <>
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    </>
};

export default Dialogs;