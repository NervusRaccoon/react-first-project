import Companion from './Companion/Companion';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.css';

const Messages = (props) => {

  let companionElemets = props.content.messagesData.map(companion => <Companion name={companion.userName} id={companion.userId} />)
  /*let messageElemets = props.content.messagesData.map(companion => <MessageItem message={message.message} userName={message .userName} />)*/

    return (
        <div className={classes.content}>
          <div className={classes.companionsList}>
            {companionElemets}
          </div>
          <div className={classes.messagesContainer}>
            {/* {messageElemets} */}
          </div>
        </div>
    );
}

export default Messages;