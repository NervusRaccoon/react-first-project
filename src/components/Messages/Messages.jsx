import Companion from './Companion/Companion';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.css';

const Messages = () => {
    return (
        <div className={classes.content}>
          <div className={classes.companionsList}>
            <Companion name='Ranger' id='1'/>
            <Companion name='Rogue' id='2'/>
          </div>
          <div className={classes.messagesContainer}>
            <MessageItem message="Yo" />
            <MessageItem message="How r u?"/>
          </div>
        </div>
    );
}

export default Messages;