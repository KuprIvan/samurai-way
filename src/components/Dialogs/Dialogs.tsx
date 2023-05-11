import React, {ChangeEvent, FC, useRef} from 'react';
import s from './Dialogs.module.css'
import {RootStore} from "../../Redux/redux-store";
import {DialogsPageType} from "../../Redux/store";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/Message";

type DialogsDataType = {
    store: RootStore
    updateMessage: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
}

const Dialogs: FC<DialogsDataType> = (props): JSX.Element => {
    let state = props.dialogsPage;

    const dialogs = state.dialogs.length
        ? state.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id} />))
        : <div>Your list is empty</div>

    const messageElements = state.messages.length
        ? state.messages.map(m => (<MessageItem key={m.id} message={m.message} id={m.id} />))
        : <div>Your list is empty</div>

    let newMessageBody = state.newMessageBody

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateMessage(body)
    }

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea value={ newMessageBody }
                                  ref={ newPostElement}
                                  placeholder='Enter your message'
                                  onChange={ onNewMessageChange  }
                        >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;