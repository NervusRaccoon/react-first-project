import PostItem from './Post/PostItem';
import classes from './MyPosts.module.css';
import React from 'react';

const MyPosts = (props) => {

  let postsElemets = props.posts.map(post => <PostItem message={post.message} userName={post.userName} likesCount={post.likesCount} />).reverse();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostTextArea.current.value;
    props.onPostChange(text)
  }

  let newPostTextArea = React.createRef();

  return (
    <div className={classes.content}>
      <div className={classes.postsLabel}>
        My posts
      </div>
      <div>
        <textarea className={classes.newPostTextArea} ref={newPostTextArea} value={props.postText} onChange={ onPostChange } />
        <button className={classes.postButton} onClick={addPost}>POST</button>
      </div>
      <div className={classes.posts}>
        {postsElemets}
      </div>
    </div>
  );
}

export default MyPosts;