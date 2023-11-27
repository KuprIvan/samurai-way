import React, {FC} from 'react';
import s from './Post.module.css';

export type PostType = {
    message: string
    likesCount: number
}
const Post: FC<PostType> = (props) => {
    return <>
        <div className={s.item}>
            <img src="https://api.dicebear.com/5.x/adventurer/svg?seed=Tinkerbell"/>
            {props.message}
            <div>
                <span>likes: {props.likesCount}</span>
            </div>
        </div>
    </>
};

export default Post;