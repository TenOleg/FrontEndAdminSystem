import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import ProfileContainer from "./components/PageOfUsers/Container/UserProfileContainer";
import LoginPage from "./components/Login/LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/appReducer";
import Preloader from "./components/common/Preloader/Preloader"
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import PostInfoContainer from "./components/PageOfPosts/Container/PostInfoContainer";
import AnalyticsContainer from "./components/PageOfAnalytics/AnalyticsContainer";

const UsersContainer = React.lazy(() => import('./components/PageOfUsers/Container/UsersContainer'));
const PostsContainer = React.lazy(() => import("./components/PageOfPosts/Container/PostsContainer"));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        // if (!this.props.initialized) {
        //     return <Preloader/>
        // }
        return (
            <div className={styles.container}>
                <div className={ this.props.isAuth ? styles.header: ''}>
                    <HeaderContainer/>
                </div>
                <div className={styles.nav}><Navbar/></div>
                <div className={styles.content}>
                    <Route path={'/analytics'} render={() => <AnalyticsContainer/>}/>
                    <Route path={'/login'} render={() => <LoginPage/>}/>
                    <Route path={'/users'} render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                            <UsersContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path={'/posts'} render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                            <PostsContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path={'/profile/:userId'} render={() => <ProfileContainer/>}/>
                    <Route path={'/postInfo/:postId'} render={() => <PostInfoContainer/>}/>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
