import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../Redux/State';

type MyPostsDataType = {
    posts: Array<PostType>
}


const MyPosts: FC<MyPostsDataType> = (props):JSX.Element => {
    const postsElements = props.posts.length
        ? props.posts.map(p => (<Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>))
        : <div> Your list is empty</div>

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;