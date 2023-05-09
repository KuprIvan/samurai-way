import {v1} from "uuid";
import {PostType, ProfilePageType} from "./state";

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

export type ProfileReducerActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof onPostChangeAC>

const profilePageReducer = (state: ProfilePageType, action: ProfileReducerActionTypes) => {
    switch (action.type) {
        case addPost:
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''

            return state;
        case updateNewPostText:
            state.newPostText = action.payload.newText;
            return state;
        default:
            return state;
    }
};

export const addPostAC = () => ({ type: addPost }) as const
export const onPostChangeAC = (newText: string) => ({
    type: updateNewPostText,
    payload: {
        newText: newText
    }
}) as const


export default profilePageReducer;