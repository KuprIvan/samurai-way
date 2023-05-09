import React, {FC} from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionTypes, ProfilePageType} from '../../Redux/state';

type ProfileType = {
    profilePage: ProfilePageType
   /* addPost: () => void
    addTextAreaLetter: (letter: string) => void*/
    dispatch: (action: ActionTypes) => void
}

const Profile: FC<ProfileType> = (props): JSX.Element => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                textAreaValue={props.profilePage.newPostText}
                dispatch={props.dispatch}
               /* addPost={props.addPost}
                addTextAreaLetter={props.addTextAreaLetter}*/
            />
        </div>
    );
};

export default Profile;