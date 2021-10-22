import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getPosts, setCurrentPage} from "../../../redux/reducers/postsReducer";
import {
    getAllPosts,
    getCurrentPage,
    getIsFetching, getKeyword, getMessage,
    getPageSize, getPostsStatus,
    getTotalPostsCount
} from "../../../redux/selectors/posts-selectors";
import Posts from "../Posts/Posts";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.getPosts('ACTIVE', this.props.keyword, this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getPosts(this.props.postsStatus, this.props.keyword, pageNumber, this.props.pageSize)
    }

    searchPost = (keyword) => {
        this.props.getPosts(this.props.postsStatus, keyword || '', 1, this.props.pageSize)
    }

    onChangeTabsStatus = (postsStatus) => {
        this.props.getPosts(postsStatus, this.props.keyword, 1, this.props.pageSize)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps !== this.props || nextState !== this.state
    }

    render() {
        return <Posts
            onChangeTabsStatus={this.onChangeTabsStatus}
            posts={this.props.posts}
            onPageChanged={this.onPageChanged}
            isFetching={this.props.isFetching}
            totalPostsCount={this.props.totalPostsCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            searchPost={this.searchPost}
            message={this.props.message}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        posts: getAllPosts(state),
        pageSize: getPageSize(state),
        totalPostsCount: getTotalPostsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        keyword: getKeyword(state),
        message: getMessage(state),
        postsStatus: getPostsStatus(state)

    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage,
        getPosts
    }))
(PostsContainer);