import React, {FC} from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType, ProfilePageType} from '../../Redux/State';

type ProfileType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
}

const Profile: FC<ProfileType> = (props):JSX.Element => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;