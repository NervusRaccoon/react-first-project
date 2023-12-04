import Companion from './Companion/Companion';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.css';

const Messages = (props) => {

  let companionElemets = props.content.messagesData.map(companion => <Companion name={companion.userName} id={companion.userId} />)
  let currentCompanionId = window.location.href.split('/').slice(-1);
  let messageElemets = currentCompanionId == 'messages' || currentCompanionId == '' ? '' :
    props.content.messagesData.find(x => x.userId == currentCompanionId).messages.map(message =>
      <MessageItem message={message.message} userName={message.userName} side={message.side} />)

  return (
    <div className={classes.content}>
      <div className={classes.companionsList}>
        {companionElemets}
      </div>
      <div className={classes.messagesContainer}>
        {messageElemets}
        <div className={classes.sendMessageBlock}>
          <img className={classes.userIcon} src='https://qph.cf2.quoracdn.net/main-qimg-6ed26560ac4bb4d9a16f0a4c64550406-lq' />
          <textarea className={classes.textArea} />
          <button className={classes.postButton}>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Messages;