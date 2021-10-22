import React, {Component} from 'react';
import Analytics from "./Analytics";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getPostsAnalytics, getUsersAnalytics} from "../../redux/reducers/analyticsReducer";

class AnalyticsContainer extends Component {
    componentDidMount() {
        this.props.getUsersAnalytics()
        this.props.getPostsAnalytics()
    }

    render() {
        return (
            <Analytics usersStatistics={this.props.usersStatistics} postsStatistics={this.props.postsStatistics}
                       usersAmt={this.props.usersAmt} postsAmt={this.props.postsAmt}
                       newUsersAmt={this.props.newUsersAmt} newPostsAmt={this.props.newPostsAmt}
                       newUsers={this.props.newUsers} newPosts={this.props.newPosts}/>
        );
    }
}

let mapStateToProps = (state) => ({
    usersAmt: state.analytics.usersAmt,
    newUsersAmt: state.analytics.newUsersAmt,
    newUsers: state.analytics.newUsers,
    usersStatistics: state.analytics.usersStatistics,

    postsStatistics: state.analytics.postsStatistics,
    postsAmt: state.analytics.postsAmt,
    newPostsAmt: state.analytics.newPostsAmt,
    newPosts: state.analytics.newPosts
})

export default compose(withRouter, connect(mapStateToProps, {getUsersAnalytics, getPostsAnalytics}))(AnalyticsContainer);