import { addPostActionCreator as addPost, updateNewPostActionCreator as onPostChange } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect(mapStateToProps, { addPost, onPostChange })(MyPosts)

export default MyPostsContainer;