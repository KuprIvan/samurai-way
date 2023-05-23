import React, {ChangeEvent, FC, useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";


export type PostType = {
    id: string
    message: string
    likesCount: number
}


const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const onAddPost = (): void => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value;
        props.updateNewPostText(newText)
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
                    value={props.newPostText}
                    onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;