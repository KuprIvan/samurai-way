import React, {FC} from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: (postMessage: string) => void
}


const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}
            />
        </div>
    );
};

export default Profile;