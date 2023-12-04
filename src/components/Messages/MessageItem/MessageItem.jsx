import classes from './MessageItem.module.css';

const MessageItem = (props) => {
  return (
    <div className={props.side == 'right' ? classes.sideRight : classes.sideLeft}>
      <div className={classes.content}>
        <div className={classes.userIcon}>
          <img src='https://qph.cf2.quoracdn.net/main-qimg-6ed26560ac4bb4d9a16f0a4c64550406-lq' />
        </div>
        <div className={classes.userName}>
          {props.userName}
        </div>
        <div className={classes.message}>
          {props.message}
        </div>
      </div>
    </div>
  );
}

export default MessageItem;