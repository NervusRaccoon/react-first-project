import Posts from './Post/Posts';
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={classes.content}>
      <div>
        <textarea />
        <button>Post</button>
      </div>
      <div>
        <Posts message="Yo" likesCount='2'/>
        <Posts message="I wanna play DnD(9(((" likesCount='200'/>
      </div>
    </div>
  );
}

export default MyPosts;