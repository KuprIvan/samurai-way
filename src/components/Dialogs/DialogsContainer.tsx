import React from 'react';
import {sendNewMessageBodyAC, updateNewMessageBodyAC} from "../../Redux/messagePageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

// type DialogsDataType = {
//     store: RootStore
// }

const DialogsContainer = (): JSX.Element => {
    return <StoreContext.Consumer>
        {
            (store) => {
                // let state = store?.getState();
//
                const onNewMessageChange = (body: string) => {
                    store?.dispatch(updateNewMessageBodyAC(body));
                }
                const onSendMessageClick = () => {
                    store?.dispatch(sendNewMessageBodyAC())
                }

                if (!store) return
                let state = store.getState();

                return <Dialogs updateMessage={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state.dialogsPage}
                                store={store}
                />;
            }
        }
    </StoreContext.Consumer>


};

export default DialogsContainer;