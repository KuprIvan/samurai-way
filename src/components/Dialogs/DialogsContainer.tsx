import React from 'react';
import {sendNewMessageBodyAC, updateNewMessageBodyAC} from "../../Redux/messagePageReducer";
import Dialogs, {DialogsPageType} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import { Dispatch } from 'redux';


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropType = {
    sendMessage: () => void
    updateMessage: (body: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropType


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropType => {
    return {
        updateMessage: (body) => {
            dispatch(updateNewMessageBodyAC(body));

        },
        sendMessage: () => {
            dispatch(sendNewMessageBodyAC())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;