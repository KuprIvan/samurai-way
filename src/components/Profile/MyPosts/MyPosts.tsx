import React, {ChangeEvent, FC, useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionTypes, addPostAC, onPostChangeAC, PostType} from '../../../Redux/State';

type MyPostsDataType = {
    posts: Array<PostType>
    textAreaValue: string
    /*addPost: () => void
    addTextAreaLetter: (letter: string) => void*/
    dispatch: (action: ActionTypes) => void
}


const MyPosts: FC<MyPostsDataType> = (props): JSX.Element => {

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = (): void => {
        let action = addPostAC()
        props.dispatch(action)
        // props.addPost()

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        let action = onPostChangeAC(newText)
        props.dispatch(action)
    }

    const postsElements = props.posts.length
        ? props.posts.map(p => (<Post
            key={p.id}
            id={p.id}
            message={p.message}
            likesCount={p.likesCount}
        />))
        : <div> Your list is empty</div>

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    ref={newPostElement}
                    value={props.textAreaValue}
                    onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPost}>Add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;