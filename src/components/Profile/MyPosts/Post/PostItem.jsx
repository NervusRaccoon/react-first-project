import classes from './PostItem.module.css';

let changeLikeState = () => { }

const Posts = (props) => {
  return (
    <div className={classes.postContent}>
      <div className={classes.userIcon}>
        <img src='https://qph.cf2.quoracdn.net/main-qimg-6ed26560ac4bb4d9a16f0a4c64550406-lq' />
      </div>
      <div className={classes.userName}>
        {props.userName}
      </div>
      <div className={classes.message}>
        {props.message}
      </div>
      <div role='button' onclick={changeLikeState()} className={classes.like}>
        <span className={classes.activeLike}>&#9829;</span> {props.likesCount}
        {/*<span className={classes.inactiveLike}>&#9825;</span> {props.likesCount}*/}
      </div>
    </div>
  );
}

export default Posts;