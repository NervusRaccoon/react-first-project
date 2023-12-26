const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
const UPDATE_MESSAGES_PAGE = "UPDATE_MESSAGES_PAGE"

let store = {
    state: {
        messagePage: {
            newMessageText: { userId: 1, message: '' },
            messagesData: [{
                userId: 1, userName: 'Ayaka', messages:
                    [{ id: 1, userName: 'Ayaka', message: 'Hello, brother. Can you please ...', side: 'left' },
                    { id: 2, userName: 'Ayato', message: 'Ok', side: 'right' }]
            },
            { userId: 2, userName: 'GREATEST Arataki Itto', messages: [{ id: 1, userName: 'GREATEST Arataki Itto', message: 'Yo bro iwanna oadggggkkkl', side: 'left' }] },
            {
                userId: 3, userName: 'Toma', messages:
                    [{ id: 1, userName: 'Toma', message: 'Waka, please, dont throw documents around the office...', side: 'left' },
                    { id: 2, userName: 'Ayato', message: 'It wasn`t me', side: 'right' },
                    { id: 3, userName: 'Ayato', message: 'Taromaru did it', side: 'right' },
                    { id: 4, userName: 'Toma', message: 'Are you joking?', side: 'left' },
                    { id: 5, userName: 'Ayato', message: 'y', side: 'right' }]
            }]
        },

        profilePage: {
            newPostText: '',
            posts: [{ userName: 'Ayaka', message: 'Beautiful!', likesCount: '20.9k' },
            { userName: 'GREATEST Arataki Itto', message: 'Go bugs fight! Today Itto goes to WIN!!!!', likesCount: 1 },
            { userName: 'Ayato', message: 'I think I forgot something. Hm...', likesCount: '1k' },
            { userName: 'GREATEST Arataki Itto', message: 'IM WAITING FOR YOU ALL DAY!!!!!!!!!!!!! WHERE ARE YOU?!?!?!?!%@%$^@^$^@$&@$*$@', likesCount: 1 }]
        }
    },
    _addPost() {
        if (this.state.profilePage.newPostText !== '') {
            let newPost = { userName: 'Ayato', message: this.state.profilePage.newPostText, likesCount: 0 };
            this.state.profilePage.posts.push(newPost);
            this.state.profilePage.newPostText = '';
            this._renderEntireTree();
        }
    },
    _updateNewPostText(message) {
        this.state.profilePage.newPostText = message;
        this._renderEntireTree();
    },
    _addMessage() {
        if (this.state.messagePage.newMessageText.message !== '') {
            let dialog = this.state.messagePage.messagesData.find(x => x.userId == this.state.messagePage.newMessageText.userId)
            let newMessage = {
                id: dialog.messages[dialog.messages.length - 1].id + 1, userName: 'Ayato',
                message: this.state.messagePage.newMessageText.message, side: 'right'
            };
            dialog.messages.push(newMessage);
            this.state.messagePage.newMessageText = { userId: this.state.messagePage.newMessageText.userId, message: '' };
            this._renderEntireTree();
        }
    },
    _updateNewMessageText(data) {
        this.state.messagePage.newMessageText.userId = data.userId;
        this.state.messagePage.newMessageText.message = data.message;
        this._renderEntireTree();
    },
    _updateMessagesPage() {
        this.state.messagePage.newMessageText.message = '';
        this._renderEntireTree();
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.message);
        }
        else if (action.type === ADD_MESSAGE) {
            this._addMessage()
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText({ userId: action.userId, message: action.message })
        }
        else if (action.type === UPDATE_MESSAGES_PAGE) {
            this._updateMessagesPage();
        }
    },
    _renderEntireTree() {
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, message: text })

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageActionCreator = (data) => ({ type: UPDATE_NEW_MESSAGE_TEXT, userId: data.userId, message: data.text })
export const updateMessagesPage = () => ({ type: UPDATE_MESSAGES_PAGE })

export default store;
window.store = store;