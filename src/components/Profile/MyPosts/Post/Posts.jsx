import classes from './Posts.module.css';

const Posts = (props) => {
  return (
    <div>
      <div>
        <img className={classes.img} src='https://qph.cf2.quoracdn.net/main-qimg-6ed26560ac4bb4d9a16f0a4c64550406-lq'/>
        {props.message}
      </div>
      <div>
        <span>&#9829; </span>{props.likesCount}
      </div>
    </div>
  );
}

export default Posts;