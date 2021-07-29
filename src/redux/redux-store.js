import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import homePageReducer from "./homePageReducer";
import usersReducer from "./reducers/usersReducer";
import postsReducer from "./reducers/postsReducer";
import profileReducer from "./reducers/profileReducer";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk"; //thunkMiddleWare
import {reducer as formReducer} from 'redux-form'
import appReducer from "./reducers/appReducer";


let reducers = combineReducers({
    homePage: homePageReducer,
    usersPage: usersReducer,
    postsPage: postsReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;