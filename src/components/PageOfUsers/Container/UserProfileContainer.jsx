import React, {Component} from 'react';
import Profile from "../UserProfile/Profile";
import {connect} from "react-redux";
import {changeStatus, getProfile, saveComment} from "../../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class UserProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId) {
            this.props.getProfile(userId);
            if (!userId) {
                this.props.history.push('/login')
            }
        }
    }

    onStatusChange = (userId, value) => {
        this.props.changeStatus(userId, value);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} saveComment={this.props.saveComment} onStatusChange={this.onStatusChange} profile={this.props.profile}
                         userId={this.props.match.params.userId} statusList={this.props.status}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        getProfile,
        changeStatus,
        saveComment
    })
)(UserProfileContainer);