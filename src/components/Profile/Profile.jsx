import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.profileBackIcon}>
        <img src='https://t4.ftcdn.net/jpg/05/76/85/69/360_F_576856958_4tJcdTzfGLRITTyKMb00SAZfdvrNNViZ.jpg' />
      </div>
      <div className={classes.userInfo}>
        <div className={classes.avatar}>
          <img src='https://www.shutterstock.com/image-vector/dice-playing-dnd-tabletop-roleplaying-600nw-2208372513.jpg' />
          User Name
        </div>
        <div className={classes.posts}>
          <MyPosts />
        </div>
      </div>
    </div>
  );
}

export default Profile;