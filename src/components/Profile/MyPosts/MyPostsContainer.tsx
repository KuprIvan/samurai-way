import React from 'react';
import {addPostAC, onPostChangeAC} from "../../../Redux/profilePageReducer";
import MyPosts, {PostType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";



type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

type MapDispatchToPropType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropType => {
    return {
        updateNewPostText: (newText: string) => {
            let action = onPostChangeAC(newText)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostAC())
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;