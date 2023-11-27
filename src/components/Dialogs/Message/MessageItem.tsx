import React, {FC} from "react";
import s from "../Dialogs.module.css";

type MessageItemType = {
    message: string
}

export const MessageItem: FC<MessageItemType> = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}