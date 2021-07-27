import React, {useEffect, useState} from "react";

const ProfileStatusCommentWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [userStatus, setUserStatus] = useState(props.status)

    useEffect( () => {
        setUserStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
    }

    const onStatusChange = (e) => {
        setUserStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode? <div>
                <span onDoubleClick={activateEditMode}>{userStatus}</span>
            </div> : <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={userStatus}></input>
            </div>}
        </>
    )
}

export default ProfileStatusCommentWithHooks;