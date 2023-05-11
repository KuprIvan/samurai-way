import React, {FC} from 'react';
import {addPostAC, onPostChangeAC} from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {RootStore} from "../../../Redux/redux-store";

type MyPostsDataType = {
    store: RootStore
}

const MyPostsContainer: FC<MyPostsDataType> = (props): JSX.Element => {
    let state = props.store.getState()
    const addPost = (): void => {
        props.store.dispatch(addPostAC());

    }
    const onPostChange = (newText: string) => {
        let action = onPostChangeAC(newText)
        props.store.dispatch(action);
    }

    return (<MyPosts updateNewPostText={ onPostChange } addPost={ addPost } posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>);
};

export default MyPostsContainer;