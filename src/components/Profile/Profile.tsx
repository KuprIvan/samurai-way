import React, {FC} from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionTypes, ProfilePageType, StoreType} from '../../Redux/store';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {RootStore} from "../../Redux/redux-store";

type ProfileType = {
    store: RootStore
}

const Profile: FC<ProfileType> = (props): JSX.Element => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    );
};

export default Profile;