import React from "react";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>
            <div>
                {props.profile.username}
                {props.profile.firstName}
                {props.profile.lastName}
                {props.profile.age}
                {props.profile.gender}
                {props.profile.email}
                {props.profile.status}
            </div>
            <div>
                <select onChange={
                    (val) => {
                        props.onStatusChange(props.userId, val.target.value)
                    }
                }>
                    {
                        props.statusList.map((stat) => <option key={stat.id} selected={props.profile.status === stat.status ? true : false} // через defaultvalue работает хреново нужно решить это проблему
                                                               disabled={props.profile.status === stat.status ? true : false}>{stat.status}</option>)
                    }
                </select>
            </div>
        </div>

    )
}

export default ProfileInfo;