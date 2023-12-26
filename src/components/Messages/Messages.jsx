import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/state';
import Companion from './Companion/Companion';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.css';
import React from 'react';

const Messages = (props) => {

  let companionElemets = props.content.messagesData.map(companion => <Companion name={companion.userName} id={companion.userId} />)
  let currentCompanionId = window.location.href.split('/').slice(-1);
  let messageElemets = currentCompanionId == 'messages' || currentCompanionId == '' ? '' :
    props.content.messagesData.find(x => x.userId == currentCompanionId).messages.map(message =>
      <MessageItem message={message.message} userName={message.userName} side={message.side} />)

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let onNewMessageChange = () => {
    let text = newMessageTextArea.current.value;
    props.dispatch(updateNewMessageActionCreator({text: text, userId: currentCompanionId}));
  }

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
          <textarea className={classes.textArea} ref={newMessageTextArea} value={props.content.newMessageText.message} onChange={onNewMessageChange} />
          <button className={classes.postButton} onClick={addMessage}>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Messages;