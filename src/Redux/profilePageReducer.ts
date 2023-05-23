import {v1} from "uuid";
import {PostType} from "../components/Profile/MyPosts/MyPosts";

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

let initialState: ProfilePageType = {
    newPostText: "",
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 15},
        {id: v1(), message: 'It\'s my first post', likesCount: 23},
    ],
}

export type ProfileReducerActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof onPostChangeAC>

const profilePageReducer = (state = initialState, action: ProfileReducerActionTypes): ProfilePageType => {
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