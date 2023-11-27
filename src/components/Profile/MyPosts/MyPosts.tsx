import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


type PostsDataType = {
    id: string
    message: string
    likesCount: number
}

const postsData: PostsDataType[] = [
    {id: "1", message: "Hi, how are you?", likesCount: 15},
    {id: "2", message: "It's my first post", likesCount: 25}]

const MyPosts = () => {
    const posts = postsData.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

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