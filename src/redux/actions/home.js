import * as types from '../actions/types';
import {baseUrl} from '../../constants/constants';
import {useSelector} from 'react-redux';
import {authLoad, loginSuccess} from './auth';

export const activeScreen = params => ({
  type: types.ACTIVE_SCREEN,
  payload: params,
});

export const getAllUserRequests = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${data.token}`);
      var raw = '';

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(
        `${baseUrl}/user/getAllRequestsByUser/${data.data._id}/all`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};
export const getAllNgoRequestsByArea = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Authorization', `Bearer ${data.token}`);
      var raw = '';

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(
        `${baseUrl}/user/getAllNgoRequestsByArea/${data._id}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};
export const sendDonation = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      console.log('token');
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token.token}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}/user/sendDonationToNgo`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};
export const verifieduser = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      console.log('token');
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token.token}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}/user/sendDonationToNgo`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};

export const getUserData = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Authorization', `Bearer ${data.token}`);
      var raw = '';

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(`${baseUrl}/user/details/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};

export const createUserDonationRequest = (
  token,
  data,
  handleSuccess,
  handleError,
) => {
  return async dispatch => {
    try {
      console.log('token');
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token.token}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}/user/createUserRequest/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};

export const getAllCategories = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Authorization', `Bearer ${data.token}`);
      var raw = '';

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(`${baseUrl}/getAllCategories/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};

export const deleteUserDonationRequest = (
  token,
  data,
  handleSuccess,
  handleError,
) => {
  return async dispatch => {
    try {
      console.log('data..............');
      console.log(data);
      console.log(token);
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      fetch(`${baseUrl}/user/deleteUserRequest/${data._id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};
// export const changePassword = (token, data, handleSuccess, handleError) => {
//   return async dispatch => {
//     try {
//       console.log('token');
//       var myHeaders = new Headers();
//       myHeaders.append('Accept', 'application/json');
//       myHeaders.append('Authorization', `Bearer Bearer ${token.token}`);

//       var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: data,
//         redirect: 'follow',
//       };

//       console.log('requestOptions');
//       console.log(requestOptions);
//       console.log(`Bearer ${token.token}`);
//       fetch(`${baseUrl}/user/changepassword`, requestOptions)
//         .then(response => response.json())
//         .then(result => {
//           handleSuccess(result);
//         })
//         .catch(error => {
//           handleError(error);
//         });
//     } catch (err) {
//       dispatch(authLoad(false));
//       console.log(err);
//       handleError(err);
//     }
//   };
// };

export const changePassword = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token.token}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}/user/changepassword`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};

export const deleteAccount = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token.token}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}/user/deleteAccount`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};

export const changeLocation = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token.token}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}/user/changeUserLocation`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};

//food outlets APIs

export const NGOgetAllUserRequests = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${data.token}`);
      var raw = '';

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(
        `${baseUrl}/ngo/getAllUserRequests/${data.data._id}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};
export const NGOmyDonatios = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Authorization', `Bearer ${data.token}`);
      var raw = '';

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(
        `${baseUrl}/user/getAllRequestsByNgo/${data.data._id}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};
export const NGOsendDonation = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      console.log('token');
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token.token}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}/user/sendDonationToNgo`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};

export const NGOcreateUserDonationRequest = (
  token,
  data,
  handleSuccess,
  handleError,
) => {
  return async dispatch => {
    try {
      console.log('token');
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token.token}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      console.log(requestOptions);
      console.log(`Bearer ${token.token}`);
      fetch(`${baseUrl}/ngo/createRequest`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};

export const NGOdeleteUserDonationRequest = (
  token,
  data,
  handleSuccess,
  handleError,
) => {
  return async dispatch => {
    try {
      console.log('data..............');
      console.log(data);
      console.log(token);
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      fetch(`${baseUrl}/ngo/deleteRequest/${data._id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};
export const updateGORequest = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      console.log('data..............');
      console.log(data);
      console.log(token);
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      fetch(`${baseUrl}/ngo/deleteRequest/${data._id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};
export const notification = (token, data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      console.log('data..............');
      console.log(data);
      console.log(token);
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      fetch(`${baseUrl}//${data._id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          handleSuccess(result);
        })
        .catch(error => {
          handleError(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
      handleError(err);
    }
  };
};

// helping functions
export const homeLoad = data => {
  return {
    type: types.HOME_LOADING,
    payload: data,
  };
};

export const addimages = data => {
  return {
    type: types.ADD_IMAGES,
    payload: data,
  };
};

export const editRoomData = data => {
  return {
    type: types.EDIT_ROOM_DATA,
    payload: data,
  };
};

export const editRoomDataAra = data => {
  return {
    type: types.EDIT_ROOM_DATA_ARA,
    payload: data,
  };
};

export const roomsData = data => {
  return {
    type: types.ROOMS_DATA,
    payload: data,
  };
};

export const reset = data => {
  return {
    type: types.RESET,
    payload: data,
  };
};

export const homeScreenData = data => {
  return {
    type: types.HOME_DATA,
    payload: data,
  };
};

export const storeConversation = data => {
  return {
    type: types.STORE_CONVERSATION,
    payload: data,
  };
};

export const setLanguage = data => {
  return {
    type: types.SET_LANGUAGE,
    payload: data,
  };
};

export const changeCurrency = data => {
  return {
    type: types.CHNAGE_CURRENCY,
    payload: data,
  };
};
