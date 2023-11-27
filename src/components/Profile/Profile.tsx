import React, {FC} from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../App";

type ProfilePropsType = {
    posts: PostsDataType[]
}


const Profile: FC<ProfilePropsType> = ({posts}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};

export default Profile;