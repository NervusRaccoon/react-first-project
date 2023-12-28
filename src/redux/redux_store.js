import { combineReducers, legacy_createStore } from "redux";
import messagesReducer from "./messages_reducer";
import profileReducer from "./profile_reducer";

let reducers = combineReducers({
    messagePage: messagesReducer,
    profilePage: profileReducer
});

let store = legacy_createStore(reducers);

export default store;