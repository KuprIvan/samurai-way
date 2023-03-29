import React, {FC, useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../Redux/State';

type MyPostsDataType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}
const MyPosts: FC<MyPostsDataType> = (props):JSX.Element => {

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = ():void => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    const postsElements = props.posts.length
        ? props.posts.map(p => (<Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>))
        : <div> Your list is empty</div>

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;