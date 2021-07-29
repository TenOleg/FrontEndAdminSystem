import './App.css';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import PostsContainer from "./components/PageOfPosts/Container/PostsContainer";
import HomeContainer from "./components/Main/HomeContainer";
import ProfileContainer from "./components/PageOfUsers/Container/UserProfileContainer";
import LoginPage from "./components/Login/LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/appReducer";
import Preloader from "./components/common/Preloader/Preloader"
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";

const UsersContainer = React.lazy(() => import('./components/PageOfUsers/Container/UsersContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div>
                    <Route path={'/login'} render={() => <LoginPage/>}/>
                    <Route path={'/home'} render={() => <HomeContainer/>}/>
                    <Route path={'/users'} render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                            <UsersContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path={'/posts'} render={() => <PostsContainer/>}/>
                    <Route path={'/profile/:userId'} render={() => <ProfileContainer/>}/>
                </div>
                <Footer/>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
