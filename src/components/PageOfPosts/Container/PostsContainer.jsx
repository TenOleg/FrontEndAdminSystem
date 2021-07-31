import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getPosts, setCurrentPage} from "../../../redux/reducers/postsReducer";
import {
    getAllPosts,
    getCurrentPage,
    getIsFetching, getKeyword,
    getPageSize,
    getTotalPostsCount
} from "../../../redux/selectors/posts-selectors";
import Posts from "../Posts/Posts";

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.getPosts(this.props.keyword, this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getPosts(this.props.keyword, pageNumber, this.props.pageSize)
    }

    searchPost = (keyword) => {
        this.props.getPosts(keyword || '', this.props.currentPage, this.props.pageSize)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps !== this.props || nextState !== this.state
    }

    render() {
        return <Posts
            posts={this.props.posts}
            onPageChanged={this.onPageChanged}
            isFetching={this.props.isFetching}
            totalPostsCount={this.props.totalPostsCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            searchPost={this.searchPost}
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
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        getPosts
    }))
(PostsContainer);