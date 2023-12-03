import PostItem from './Post/PostItem';
import classes from './MyPosts.module.css';

const MyPosts = () => {
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
        <PostItem message="Yo" likesCount='2' userName='Kamisato Ayato' />
        <PostItem message="YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo" likesCount='200' userName='Ayato' />
        <PostItem message="YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo" likesCount='200' userName='Ayato' />
        <PostItem message="YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo" likesCount='200' userName='Ayato' />
        <PostItem message="YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo" likesCount='200' userName='Ayato' />
        <PostItem message="YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo" likesCount='200' userName='Ayato' />
      </div>
    </div>
  );
}

export default MyPosts;