import React, {FC} from 'react';
import s from './Post.module.css';
import {PostType} from '../../../../Redux/State';
const Post: FC<PostType> = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://api.dicebear.com/5.x/adventurer/svg?seed=Tinkerbell"/>
                {props.message}
                <div>
                    <span>likes: {props.likesCount}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;