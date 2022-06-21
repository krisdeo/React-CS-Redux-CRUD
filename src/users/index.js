import React from "react";
import {
  DELETE_USER_DATA,
  GET_USERS_LIST,
  GET_USER_DETAIL,
  POST_CREATE_USER,
  PUT_USER_EDIT,
} from "../actions/UserAction";

let initialState = {
  getUsersList: false,
  errorUsersList: false,

  getUserDetail: false,
  errorUserDetail: false,

  getResponseDataUser: false,
  errorResponseDataUser: false,

  getResponseDeleteUser: false,
  errorResponseDeleteUser: false,

  title: "Wahidev Academy",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };

    case GET_USER_DETAIL:
      return {
        ...state,
        getUserDetail: action.payload.data,
        errorUserDetail: action.payload.errorMessage,
      };

    case POST_CREATE_USER:
      return {
        ...state,
        getResponseDataUser: action.payload.data,
        errorResponseDataUser: action.payload.errorMessage,
      };

    case PUT_USER_EDIT:
      return {
        ...state,
        getResponseDataUser: action.payload.data,
        errorResponseDataUser: action.payload.errorMessage,
      };

    case DELETE_USER_DATA:
      console.log("DELETE_USER_DATA >>> ", action.payload);
      return {
        ...state,
        getResponseDeleteUser: action.payload.data,
        errorResponseDeleteUser: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default users;
