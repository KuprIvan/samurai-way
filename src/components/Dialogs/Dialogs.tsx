import React, {FC, useRef} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/Message';
import {ActionTypes, DialogsPageType} from '../../Redux/store';
import {sendNewMessageBodyAC, updateNewMessageBodyAC} from "../../Redux/messagePageReducer";

type DialogsDataType = {
    state: DialogsPageType
    dispatch: (action: ActionTypes) => void
}

const Dialogs: FC<DialogsDataType> = (props): JSX.Element => {

    const dialogs = props.state.dialogs.length
        ? props.state.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id} />))
        : <div>Your list is empty</div>

    const messageElements = props.state.messages.length
        ? props.state.messages.map(m => (<MessageItem key={m.id} message={m.message} id={m.id} />))
        : <div>Your list is empty</div>

    let newMessageBody = props.state.newMessageBody

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const OnAddNewMessageBody = () => {
        let text = newPostElement.current?.value as string
        let action = updateNewMessageBodyAC(text)
        props.dispatch(action)
    }

    const OnSendNewMessageBody = () => {
        let action = sendNewMessageBodyAC()
        props.dispatch(action)
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
                                  ref={newPostElement}
                                  placeholder='Enter your message'
                                  onChange={ OnAddNewMessageBody  }
                        >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={ OnSendNewMessageBody }>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;