import axios from "axios";
import { DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_ALL_USERS_FAILURE, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { API_BASE_URL } from "../../config/apiConfig";

const token = localStorage.getItem("jwt");
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });


export const register = (userData) => async (dispatch) => {

    dispatch(registerRequest())

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData)
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }
        console.log("user ", user)
        dispatch(registerSuccess(user.jwt))
    }
    catch (error) {
        console.log("user ", error)

        dispatch(registerFailure(error.message))
    }
}


const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });


export const login = (userData) => async (dispatch) => {

    dispatch(loginRequest())

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData)
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }
        console.log("user ", user);
        dispatch(loginSuccess(user.jwt))
    }
    catch (error) {
        dispatch(loginFailure(error.message))
    }
}

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });


export const getUser = (jwt) => async (dispatch) => {
    dispatch(getUserRequest())

    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
        const user = response.data;
        console.log("user ", user);
        dispatch(getUserSuccess(user))
    }
    catch (error) {
        
        dispatch(getUserFailure(error.message))
    }
}

// export const logout = (token) => (dispatch) => {
//     dispatch({ type: LOGOUT, payload: null });
//     localStorage.clear();
// }

export const logout = (token) => {
    return async (dispatch) => {
      dispatch({ type: LOGOUT });
      localStorage.clear();
      };
    };



export const getAllUsersRequest = () => ({
    type: GET_ALL_USERS_REQUEST,
  });
  
  export const getAllUsersSuccess = (users) => ({
    type: GET_ALL_USERS_SUCCESS,
    payload: users,
  });
  
  export const getAllUsersFailure = (error) => ({
    type: GET_ALL_USERS_FAILURE,
    payload: error,
  });
  
  export const getAllUsers = () => async (dispatch) => {
    dispatch(getAllUsersRequest());
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users`);
      dispatch(getAllUsersSuccess(response.data));
    } catch (error) {
      dispatch(getAllUsersFailure(error.message));
    }
  };


  // Action.js

export const deleteUserRequest = () => ({
    type: DELETE_USER_REQUEST,
  });
  
  export const deleteUserSuccess = (userId) => ({
    type: DELETE_USER_SUCCESS,
    payload: userId,
  });
  
  export const deleteUserFailure = (error) => ({
    type: DELETE_USER_FAILURE,
    payload: error,
  });


export const deleteUser = (userId) => async (dispatch) => {
    dispatch(deleteUserRequest());
    try {
      await axios.delete(`${API_BASE_URL}/api/users/${userId}`);
      dispatch(deleteUserSuccess(userId));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
