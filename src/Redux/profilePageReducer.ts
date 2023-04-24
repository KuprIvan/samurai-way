import {v1} from "uuid";
import {ActionTypes, PostType, ProfilePageType} from "./State";

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const profilePageReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case addPost:
            const newPost: PostType = {
                id: v1(),
                message: state.newPostTest,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostTest = ''

            return state;
        case updateNewPostText:
            state.newPostTest = action.payload.newText;
            return state;
        default:
            return state;
    }
}

export default profilePageReducer;