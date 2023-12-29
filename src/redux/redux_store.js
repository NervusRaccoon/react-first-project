import { combineReducers, legacy_createStore } from "redux";
import messagesReducer from "./messages_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({
    messagePage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});

let store = legacy_createStore(reducers);

export default store;