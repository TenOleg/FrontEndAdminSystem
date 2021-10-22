import {connect} from "react-redux";
import {getUsers} from "../../../redux/reducers/usersReducer";
import React from "react";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getAllUsers,
    getCurrentPage,
    getIsFetching, getKeyword, getMessage,
    getPageSize,
    getTotalUsersCount, getUserStatus
} from "../../../redux/selectors/users-selectors";
import Users from "../Users/Users";
import {setCurrentPage} from "../../../redux/reducers/postsReducer";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers('ACTIVE', this.props.keyword, this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.userStatus, this.props.keyword, pageNumber, this.props.pageSize);
    }

    searchByKeyword = (keyword) => {
        this.props.getUsers(this.props.userStatus, keyword || '', 1, this.props.pageSize)
    }

    onChangeTabsStatus = (userStatus) => {
        this.props.getUsers(userStatus, this.props.keyword, 1, this.props.pageSize)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps !== this.props || nextState !== this.state
    }

    render() {
        return <Users
            onChangeTabsStatus={this.onChangeTabsStatus}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            isFetching={this.props.isFetching}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            searchByKeyword={this.searchByKeyword}
            message={this.props.message}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        keyword: getKeyword(state),
        message: getMessage(state),
        userStatus: getUserStatus(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers
    })
)(UsersContainer);