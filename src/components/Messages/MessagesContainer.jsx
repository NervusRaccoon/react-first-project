import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator, updateMessagesPage } from '../../redux/messages_reducer';
import Messages from './Messages'

const MessagesContainer = (props) => {
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
      }
    
      let onNewMessageChange = (text, userId) => {
        props.dispatch(updateNewMessageActionCreator({text: text, userId: userId}));
      }

      let onMessagesPageChange = () => {
        props.dispatch(updateMessagesPage());
      }

    return <Messages onNewMessageChange={onNewMessageChange} 
                    addMessage={addMessage} 
                    messagesData={props.content.messagesData} 
                    newMessageText={props.content.newMessageText.message}
                    onMessagesPageChange={onMessagesPageChange}/>
}

export default MessagesContainer;