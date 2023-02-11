import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogItemType = {
    id: string
    name: string
}

type MessageItemType = {
    title: string
}
const DialogItem: FC<DialogItemType> = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem: FC<MessageItemType> = (props)  => {
  return (
      <div className={s.message}>
          {props.title}
      </div>
  )
}



const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Ivan' id='1'/>
                <DialogItem name='Nastya' id='2'/>
                <DialogItem name='Denis' id='3'/>
                <DialogItem name='Ihor' id='4'/>
                <DialogItem name='Sveta' id='5'/>
            </div>
            <div className={s.messages}>
                <MessageItem title='Hi' />
                <MessageItem title='Yo' />
                <MessageItem title='Bye' />
            </div>
        </div>
    );
};

export default Dialogs;