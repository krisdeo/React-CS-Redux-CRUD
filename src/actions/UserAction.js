import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const DELETE_USER_DETAIL = "DELETE_USER_DETAIL";
export const POST_CREATE_USER = "POST_CREATE_USER";
export const PUT_USER_EDIT = "PUT_USER_EDIT";
export const DELETE_USER_DATA = "DELETE_USER_DATA";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get("https://my-json-server.typicode.com/krisdeo/fake-api-users/users")
      .then(function (response) {
        // handle success
        console.log("getUsersList response >>> ", response);

        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log("getUsersList error >>> ", error);

        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUserDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/krisdeo/fake-api-users/users/" + id
      )
      .then(function (response) {
        // handle success
        console.log("getUsersList response >>> ", response);

        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log("getUsersList error >>> ", error);

        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUserDetail = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_CREATE_USER,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const postCreateUser = (data) => {
  return (dispatch) => {
    axios
      .post(
        "https://my-json-server.typicode.com/krisdeo/fake-api-users/users/",
        data
      )
      .then(function (response) {
        // handle success
        console.log("postCreateUser response >>> ", response);

        dispatch({
          type: POST_CREATE_USER,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log("postCreateUser error >>> ", error);

        dispatch({
          type: POST_CREATE_USER,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putUserEdit = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        "https://my-json-server.typicode.com/krisdeo/fake-api-users/users/" +
          id,
        data
      )
      .then(function (response) {
        // handle success
        console.log("putUserEdit response >>> ", response);

        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log("putUserEdit error >>> ", error);

        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUserData = (id) => {
  return (dispatch) => {
    axios
      .delete(
        "https://my-json-server.typicode.com/krisdeo/fake-api-users/usersssss/" +
          id
      )
      .then(function (response) {
        // handle success
        console.log("deleteUserData response >>> ", response);

        dispatch({
          type: DELETE_USER_DATA,
          payload: {
            data: true,
            errorMessage: true,
          },
        });
      })

      .catch(function (error) {
        // handle error
        console.log("deleteUserData error >>> ", error.response);

        dispatch({
          type: DELETE_USER_DATA,
          payload: {
            data: true,
            errorMessage: true,
          },
        });
      });
  };
};
