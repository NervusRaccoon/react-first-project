import { addMessageActionCreator as addMessage, updateNewMessageActionCreator as onNewMessageChange, updateMessagesPage as onMessagesPageChange } from '../../redux/messages_reducer';
import Messages from './Messages'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    messagesData: state.messagePage.messagesData,
    newMessageText: state.messagePage.newMessageText.message
  }
}

const MessagesContainer = connect(mapStateToProps, {addMessage, onNewMessageChange, onMessagesPageChange}) (Messages)

export default MessagesContainer;