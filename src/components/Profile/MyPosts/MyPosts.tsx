import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsDataType} from "../../../App";

type MyPostsType = {
    posts: PostsDataType[]
}


const MyPosts: FC<MyPostsType> = (props) => {
    const posts = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;