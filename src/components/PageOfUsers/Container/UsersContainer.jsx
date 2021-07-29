import {connect} from "react-redux";
import {getUsers, setCurrentPage} from "../../../redux/reducers/usersReducer";
import React from "react";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getAllUsers,
    getCurrentPage,
    getIsFetching, getKeyword,
    getPageSize,
    getTotalUsersCount
} from "../../../redux/selectors/users-selectors";
import Users from "../Users/Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.keyword, this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.keyword, pageNumber, this.props.pageSize);
    }

    searchUser = (keyword) => {
            this.props.getUsers(keyword || '', this.props.currentPage, this.props.pageSize)
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
            searchUser={this.searchUser}
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
        getUsers
    })
)(UsersContainer);