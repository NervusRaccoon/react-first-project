const USERS_FOLLOW = 'USERS_FOLLOW'
const USERS_UNFOLLOW = 'USERS_UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    totalUsersCount: 13,
    currentPage: 2,
    pageSize: 5,
    isFetching: false,
    maxUsersPagesCount: 5,
    users: []
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case (USERS_FOLLOW): {
            let stateCopy = {
                ...state,
                users: state.users.map(x => {
                    if (x.id === action.userId) {
                        return {...x, followed: true}
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
                        return {...x, followed: false}
                    }
                    return x})
            }
            return stateCopy;
        }
        case (SET_USERS): {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case (SET_CURRENT_PAGE): {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case (SET_TOTAL_USERS_COUNT): {
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        }
        case (TOGGLE_IS_FETCHING): {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return state;
    }
}

export const followAC = (userId) => ({type: USERS_FOLLOW, userId: userId})
export const unfollowAC = (userId) => ({type: USERS_UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})
export const setCurrentPageAC = (number) => ({type: SET_CURRENT_PAGE, pageNumber: number})
export const setTotalUsersCountAC = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount: usersCount})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})

export default usersReducer;