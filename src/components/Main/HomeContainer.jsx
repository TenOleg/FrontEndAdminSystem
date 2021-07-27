import {connect} from "react-redux";
import Home from "./Home";

let mapStateToProps = (state) => {
    return {
        posts: state.homePage.posts,
    }
}

let mapDispatchToProps = () => {
    return {
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;