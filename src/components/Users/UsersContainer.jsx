import {connect} from "react-redux";
import {findUserByUsername, getUsers, setCurrentPage} from "../../redux/usersPageReducer";
import React from "react";
import Users from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getAllUsers,
    getCurrentPage,
    getIsFetching, getKeyword,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    onSearchClick = (keyword) => {
        this.props.findUserByUsername(keyword, this.props.currentPage, this.props.pageSize)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps !== this.props || nextState !== this.state
    }

    render() {
        return <Users
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            isFetching={this.props.isFetching}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            onSearchClick={this.onSearchClick}
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
        keyword: getKeyword(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers,
        findUserByUsername
    })
)(UsersContainer);