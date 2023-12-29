const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
const UPDATE_MESSAGES_PAGE = "UPDATE_MESSAGES_PAGE"

let initialState = {
    newMessageText: { userId: 1, message: '' },
    messagesData: [
        {
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
}

let messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_MESSAGE): {
            if (state.newMessageText.message !== '') {
                let stateCopy = {
                    ...state,
                    messagesData: state.messagesData.map(x => {
                        if (x.userId == state.newMessageText.userId) {
                            let newMessage = {
                                id: x.messages[x.messages.length - 1].id + 1, userName: 'Ayato',
                                message: state.newMessageText.message, side: 'right'
                            };
                            return {
                                ...x,
                                messages: [...x.messages, newMessage]
                            }
                        }
                        return x;
                    }),
                    newMessageText: { ...state.newMessageText, userId: state.newMessageText.userId, message: '' }
                }
                return stateCopy;
            }
            return state;
        }
        case (UPDATE_NEW_MESSAGE_TEXT): {
            let stateCopy = {
                ...state,
                newMessageText: { ...state.newMessageText, userId: action.userId, message: action.message }
            }
            return stateCopy;
        }
        case (UPDATE_MESSAGES_PAGE): {
            let stateCopy = {
                ...state,
                newMessageText: { ...state.newMessageText, userId: action.userId, message: '' }
            }
            return stateCopy;
        }
        default: return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageActionCreator = (userId, message) => ({ type: UPDATE_NEW_MESSAGE_TEXT, userId: userId, message: message })
export const updateMessagesPage = (userId) => ({ type: UPDATE_MESSAGES_PAGE, userId: userId })


export default messagesReducer;