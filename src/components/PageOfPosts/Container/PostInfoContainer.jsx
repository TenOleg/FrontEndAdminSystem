import React, {Component} from 'react';
import {connect} from "react-redux";
import PostInfo from "../PostInfo/PostInfo";

class PostInfoContainer extends Component {
    componentDidMount() {
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
    }

    render() {
        return (
            <PostInfo/>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {

})(PostInfoContainer) ;