import { combineReducers } from "redux";
import posts from './posts_reducer';
import user from './user_reducer';
import clients from './clients_reducers';
const appReducers =combineReducers({
    posts,
    user,
    clients
})

export default appReducers;