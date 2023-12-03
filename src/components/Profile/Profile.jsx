import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <div className={classes.profileInfo}>
        <div className={classes.userAvatar}>
          <img src='https://sun9-51.userapi.com/impg/9izUnZrJGLRvf6l5_ZivPt1nsfr26TtYw9Psjg/XjwpKSwdc0w.jpg?size=1376x2048&quality=95&sign=2a493205ec633b5415b6589e854492d8&type=album' />
        </div>
        <div className={classes.userName}>
          User Name
        </div>
      </div>
      <div className={classes.posts}>
        <MyPosts posts={props.content.posts} />
      </div>
    </div>
  );
}

export default Profile;