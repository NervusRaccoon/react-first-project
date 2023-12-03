import PostItem from './Post/PostItem';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {

  let postsElemets = props.posts.map(post => <PostItem message={post.message} userName={post.userName} likesCount={post.likesCount} />)

  return (
    <div className={classes.content}>
      <div className={classes.postsLabel}>
        My posts
      </div>
      <div >
        <textarea className={classes.textArea} />
        <button className={classes.postButton}>POST</button>
      </div>
      <div className={classes.posts}>
        {postsElemets}
      </div>
    </div>
  );
}

export default MyPosts;