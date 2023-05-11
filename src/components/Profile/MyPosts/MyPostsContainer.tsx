import React from 'react';
import {addPostAC, onPostChangeAC} from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

// type MyPostsDataType = {
//     store: RootStore
// }

const MyPostsContainer = (): JSX.Element => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const addPost = (): void => {
                        store?.dispatch(addPostAC());

                    }
                    const onPostChange = (newText: string) => {
                        let action = onPostChangeAC(newText)
                        store?.dispatch(action);
                    }

                    if (!store) return
                    let state = store.getState();

                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={state?.profilePage.posts}
                                    newPostText={state?.profilePage.newPostText}/>;
                }
            }

        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;