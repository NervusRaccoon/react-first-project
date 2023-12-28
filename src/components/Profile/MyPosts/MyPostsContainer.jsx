import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.dispatch(updateNewPostActionCreator(text));
    }

    return <MyPosts onPostChange={onPostChange} addPost={addPost} postText={props.content.newPostText} posts={props.content.posts}/>
}

export default MyPostsContainer;