import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import homePageReducer from "./homePageReducer";
import usersPageReducer from "./usersPageReducer";
import postsPageReducer from "./postsPageReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk"; //thunkMiddleWare
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer";


let reducers = combineReducers({
    homePage: homePageReducer,
    usersPage: usersPageReducer,
    postsPage: postsPageReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;