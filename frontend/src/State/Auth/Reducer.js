import { DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_ALL_USERS_FAILURE, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
    users:[]
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return { ...state, isLoading: true, error: null }

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, error: null, jwt: action.payload }
            
        case GET_USER_SUCCESS:
            return { ...state, isLoading: false, error: null, user: action.payload }

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        case LOGOUT:
            return { ...initialState }

            case GET_ALL_USERS_REQUEST:
      return {
        ...state,
        isLoadingUsers: true,
        errorUsers: null,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        isLoadingUsers: false,
        users: action.payload,
      };
    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        isLoadingUsers: false,
        errorUsers: action.payload,
      };
    case DELETE_USER_REQUEST:
      return {
        ...state,
        isDeletingUser: true,
        errorDeletingUser: null,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isDeletingUser: false,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        isDeletingUser: false,
        errorDeletingUser: action.payload,
      };

        default:
            return state;
    }
}