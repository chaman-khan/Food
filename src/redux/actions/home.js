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
      // myHeaders.append('Accept', 'application/json');
      myHeaders.append('Authorization', `Bearer ${data.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch(
        `${baseUrl}/user/getAllNgoRequestsByArea/${data.data._id}`,
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
export const changeEmail = (token, data, handleSuccess, handleError) => {
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
      fetch(`${baseUrl}/user/changeUserEmail`, requestOptions)
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
export const NGOgetAcceptedRequests = (data, handleSuccess, handleError) => {
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
        `${baseUrl}/ngo/getAllNgoUserRequests/${data.data._id}/accepted`,
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
      myHeaders.append('Authorization', `Bearer ${data.token}`);
      var raw = '';
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(
        `${baseUrl}/ngo/getAllRequestsByNgo/${data.data._id}`,
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
export const NGOUpdateRequest = (token, data, handleSuccess, handleError) => {
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
      fetch(`${baseUrl}/ngo/updateUserRequestByNgo`, requestOptions)
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
export const NGOEditRequestt = (token, data, handleSuccess, handleError) => {
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
      fetch(`${baseUrl}/ngo/updateRequest`, requestOptions)
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
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };
      fetch(`${baseUrl}/user/save-fcm-token`, requestOptions)
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
export const getNotification = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      fetch(`https://foodcare.glitch.me/get-notification-for-user/${data.data._id}`, requestOptions)
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
export const getNGONotification = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      fetch(`https://foodcare.glitch.me/get-notification-for-ngo/${data.data._id}`, requestOptions)
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

export const renderItem = data => {
  return {
    type: types.RENDER_ITEM,
    payload: data,
  };
};

export const saveData = data => {
  return {
    type: types.DATA,
    payload: data,
  };
};
