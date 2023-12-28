import { addMessageActionCreator, updateNewMessageActionCreator, updateMessagesPage } from '../../redux/messages_reducer';
import Messages from './Messages'
import { connect } from 'react-redux';

debugger;
let mapStateToProps = (state) => {
  return {
    messagesData: state.messagePage.messagesData,
    newMessageText: state.messagePage.newMessageText.message
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onNewMessageChange: (text, userId) => {
      dispatch(updateNewMessageActionCreator({ text: text, userId: userId }));
    },
    onMessagesPageChange: () => {
      dispatch(updateMessagesPage());
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages)

export default MessagesContainer;