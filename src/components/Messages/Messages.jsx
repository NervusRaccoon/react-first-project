import Companion from './Companion/Companion';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.css';
import React from 'react';

const Messages = (props) => {

  let addMessage = () => {
    props.addMessage();
  }

  let onNewMessageChange = () => {
    let text = newMessageTextArea.current.value;
    props.onNewMessageChange(props.userId, text);
  }

  let onMessagesPageChange = (userId) => {
    props.onMessagesPageChange(userId);
  }

  let companionElemets = props.messagesData.map(companion => <Companion name={companion.userName} id={companion.userId} currentUserId={props.userId} onMessagesPageChange={onMessagesPageChange} />)

  let messageElemets = props.messagesData.find(x => x.userId == props.userId).messages.map(message =>
    <MessageItem message={message.message} userName={message.userName} side={message.side} />)

  let newMessageTextArea = React.createRef();

  return (
    <div className={classes.content}>
      <div className={classes.companionsList}>
        {companionElemets}
      </div>
      <div className={classes.messagesContainer}>
        {messageElemets}
        <div className={classes.sendMessageBlock}>
          <img className={classes.userIcon} src='https://qph.cf2.quoracdn.net/main-qimg-6ed26560ac4bb4d9a16f0a4c64550406-lq' />
          <textarea className={classes.textArea} ref={newMessageTextArea} value={props.newMessageText} onChange={onNewMessageChange} />
          <button className={classes.postButton} onClick={addMessage}>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Messages;