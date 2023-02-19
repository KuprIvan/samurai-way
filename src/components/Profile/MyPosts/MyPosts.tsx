import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    const postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
    ]
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
                <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    );
};

export default MyPosts;