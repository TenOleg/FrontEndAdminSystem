import React from "react";
import UserProfileInfo from "./UserProfileInfo/UserProfileInfo";
import ProfileStatusCommentWithHooks from "./UserProfileInfo/ProfileStatusCommentWithHooks";

const Profile = (props) => {
    return <div>
        <div>Profile Page</div>
        <UserProfileInfo statusList={props.statusList} onStatusChange={props.onStatusChange} profile={props.profile} userId={props.userId}/>
        {props.profile.status !== 'ACTIVE' ? <ProfileStatusCommentWithHooks status={'lol'}/> : false}
    </div>
}

export default Profile;