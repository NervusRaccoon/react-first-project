import classes from './Messages.module.css';

const Messages = () => {
    return (
        <div className={classes.content}>
          <div className={classes.companionsList}>
            <div className={classes.companionInfo}>
              User 1
            </div>
            <div className={classes.companionInfo}>
              User 2
            </div>
          </div>
          <div className={classes.messagesContainer}>
            <div className={classes.message}>
              Message 1
            </div>
            <div className={classes.message}>
              Message 2
            </div>
            <div className={classes.message}>
              Message 3
            </div>
          </div>
        </div>
    );
}

export default Messages;