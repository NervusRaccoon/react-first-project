const USERS_FOLLOW = 'USERS_FOLLOW'
const USERS_UNFOLLOW = 'USERS_UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: []}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case (USERS_FOLLOW): {
            let stateCopy = {
                ...state,
                users: state.users.map(x => {
                    if (x.id === action.userId) {
                        return {...x, isFollowed: true}
                    }
                    return x})
            }
            return stateCopy;
        }
        case (USERS_UNFOLLOW): {
            let stateCopy = {
                ...state,
                users: state.users.map(x => {
                    if (x.id === action.userId) {
                        return {...x, isFollowed: false}
                    }
                    return x})
            }
            return stateCopy;
        }
        case (SET_USERS): {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default: return state;
    }
}

export const followAC = (userId) => ({type: USERS_FOLLOW, userId: userId})
export const unfollowAC = (userId) => ({type: USERS_UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})

export default usersReducer;