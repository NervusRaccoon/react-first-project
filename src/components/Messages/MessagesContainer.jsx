import { addMessageActionCreator as addMessage, updateNewMessageActionCreator as onNewMessageChange, updateMessagesPage as onMessagesPageChange } from '../../redux/messages_reducer';
import withRouter from '../common/Preloader/WithRouter';
import Messages from './Messages'
import { connect } from 'react-redux';
import React from "react";

let mapStateToProps = (state) => {
  return {
    messagesData: state.messagePage.messagesData,
    newMessageText: state.messagePage.newMessageText.message
  }
}

class MessagesContainer extends React.Component {


  render() {
    let userId = (!this.props.router.params.userId) ? 1 : this.props.router.params.userId;
      return (
          <Messages {...this.props} profile={this.props.profile} userId={userId} />
      );
  }
}

export default connect(mapStateToProps, {addMessage, onNewMessageChange, onMessagesPageChange}) (withRouter(MessagesContainer));