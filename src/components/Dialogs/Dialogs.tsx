import React, {ChangeEvent, FC, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessageItem} from "./Message/MessageItem";
import {DialogsPageType} from "../../redux/state";



type DialogsPropType = {
    state: DialogsPageType
}

const Dialogs: FC<DialogsPropType> = (props) => {
    const dialogsElements = props.state.dialogs
        .map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    const messagesElements = props.state.messages
        .map(m => <MessageItem key={m.id} message={m.name}></MessageItem>);

    const newPostTest = React.createRef<HTMLTextAreaElement>();
    const onAddBtnClickHandler = () => {
        const newPostText = newPostTest.current?.value;
        alert(newPostText)
    }

    return <>
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

            </div>
            <div>
                <textarea ref={newPostTest}></textarea>
                <button onClick={onAddBtnClickHandler}>Add</button>
            </div>
        </div>
    </>
};

export default Dialogs;