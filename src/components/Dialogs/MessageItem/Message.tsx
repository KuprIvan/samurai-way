import React, {FC} from 'react';
import s from './../Dialogs.module.css'
import {MessageItemType} from '../../../Redux/state';


const MessageItem: FC<MessageItemType> = (props): JSX.Element => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default MessageItem;