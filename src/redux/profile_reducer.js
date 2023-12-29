const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

let initialState = {
    newPostText: '',
    posts: [{ userName: 'Ayaka', message: 'Beautiful!', likesCount: '20.9k' },
    { userName: 'GREATEST Arataki Itto', message: 'Go bugs fight! Today Itto goes to WIN!!!!', likesCount: 1 },
    { userName: 'Ayato', message: 'I think I forgot something. Hm...', likesCount: '1k' },
    { userName: 'GREATEST Arataki Itto', message: 'IM WAITING FOR YOU ALL DAY!!!!!!!!!!!!! WHERE ARE YOU?!?!?!?!%@%$^@^$^@$&@$*$@', likesCount: 1 }]
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_POST): {
            if (state.newPostText !== '') {
                let stateCopy = {
                    ...state,
                    posts: [...state.posts, {userName: 'Ayato', message: state.newPostText, likesCount: 0 }],
                    newPostText: ''};
                return stateCopy;
            }
            break;
        }
        case (UPDATE_NEW_POST_TEXT): {
            let stateCopy = {
                ...state,
                newPostText: action.message};
            return stateCopy;
        }
        default: return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, message: text })

export default profileReducer;