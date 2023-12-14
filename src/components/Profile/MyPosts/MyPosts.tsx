import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsDataType} from "../../../redux/state";

type MyPostsType = {
    posts: PostsDataType[]
}


const MyPosts: FC<MyPostsType> = (props) => {
    const newPostTest = React.createRef<HTMLTextAreaElement>();
    const posts = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

    const onAddBtnClickHandler = () => {
        const newPostText = newPostTest.current?.value;
        alert(newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostTest}></textarea>
            </div>
            <div>
                <button onClick={ onAddBtnClickHandler }>Add</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;