import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsDataType} from "../../../redux/state";

type MyPostsType = {
    posts: PostsDataType[]
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: (postMessage: string) => void
}


const MyPosts: FC<MyPostsType> = (props) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const posts = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddBtnClickHandler = () => {
        const newPostText = newPostElement.current?.value;
        if (typeof newPostText === "string") {
            props.addPost(newPostText);
        }
    }

    const onChangeTextAreaHandler = () => {
        let text = newPostElement.current?.value;
        if (typeof text === 'string') {
            props.updateNewPostText(text)
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                {/*<textarea ref={newPostTest}></textarea>*/}
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onChangeTextAreaHandler}

                />
            </div>
            <div>
                <button onClick={onAddBtnClickHandler}>Add</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;