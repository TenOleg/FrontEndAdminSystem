import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStatusCommentWithHooks from "./ProfileInfo/ProfileStatusCommentWithHooks";

const Profile = (props) => {
    return <div>
        <div>Profile Page</div>
        <ProfileInfo statusList={props.statusList} onStatusChange={props.onStatusChange} profile={props.profile} userId={props.userId}/>
        {props.profile.status !== 'ACTIVE' ? <ProfileStatusCommentWithHooks status={'lol'}/> : false}
    </div>
}

export default Profile;