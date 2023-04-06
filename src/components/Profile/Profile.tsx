import React, {FC} from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {updateNewPostText, PostType, ProfilePageType} from '../../Redux/State';

type ProfileType = {
    profilePage: ProfilePageType
    addPost: () => void
    addTextAreaLetter: (letter: string) => void
}

const Profile: FC<ProfileType> = (props): JSX.Element => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                textAreaValue={props.profilePage.newPostTest}
                addPost={props.addPost}
                addTextAreaLetter={props.addTextAreaLetter}
            />
        </div>
    );
};

export default Profile;