import React, {useState} from "react";
import {TextAreaReduxForm} from "../../../common/TextAreaForm/TextAreaForm";

const ProfileStatusCommentWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
    }

    const onSubmit = (formData) => {
        props.saveComment(props.userId, props.status, formData.comment)
        deActivateEditMode()
    }

    return (
        <>
            {!editMode ? <div>
                <span onDoubleClick={activateEditMode}>{props.p}</span>
            </div> : <div>
                <TextAreaReduxForm onSubmit={onSubmit}/>
            </div>}
        </>
    )
}

export default ProfileStatusCommentWithHooks;