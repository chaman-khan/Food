import * as types from './types';
import {apiKey, baseUrl} from '../../constants/constants';

export const registerUser = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify(data);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}/user/register`, requestOptions)
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

export const verifyAccount = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify(data);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}/user/verify-account`, requestOptions)
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
export const submitCertificates = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Accept', 'application/json');

      var raw = JSON.stringify(data);
      console.log(
        '==rawwwwwwwwwwwwwwwwwwwww==================================',
      );
      console.log(raw);
      console.log(
        '=========================rawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww===========',
      );
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}/user/submit-certificate`, requestOptions)
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

export const loginUser = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify(data);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}/user/login`, requestOptions)
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

export const sendResetPassword = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify(data);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}/user/send-reset-password-email`, requestOptions)
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

export const verifyOTP = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify(data);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}/user/check-reset-password-otp`, requestOptions)
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

export const resetPassword = (data, handleSuccess, handleError) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify(data);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}/user/reset-password`, requestOptions)
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

export const loginManager = (data, successLogin) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify(data);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(`${baseUrl}/api/user/login`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
    }
  };
};

export const emailVerify = (data, onSuccess) => {
  return async dispatch => {
    try {
      var config = {
        method: 'post',
        url: `${baseUrl}send_email_verification_code_to_user.php`,
        headers: {},
        data,
      };

      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(
        `${baseUrl}send_email_verification_code_to_user.php`,
        requestOptions,
      )
        .then(response => response.json())
        .then(response => {
          dispatch(authLoad(false));
          console.log(response);
          if (response.state === 'OK') {
            onSuccess(true);
          } else {
            onSuccess(false);
          }
        })
        .catch(error => console.log('error', error));

      // axios(config)
      //   .then(function (response) {
      //     dispatch(authLoad(false));
      //     console.log(response.data);
      //     if (response.data.state === 'OK') {
      //       onSuccess(true);
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
    }
  };
};

export const Otp = (data, otpSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}verify_user_email_verification_code.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          dispatch(authLoad(false));
          console.log(response);
          if (response.state === 'OK') {
            otpSuccess(true);
          } else {
            ShowSnackBar('OTP not correct');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
    }
  };
};

// helping functions

export const authLoad = data => {
  return {
    type: types.AUTH_LOADING,
    payload: data,
  };
};

export const signupSuccess = data => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: data,
  };
};

export const loginSuccess = data => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: data,
  };
};

export const logout = data => {
  return {
    type: types.LOGOUT_SUCCESS,
    payload: data,
  };
};

export const checkInternet = data => {
  return {
    type: types.CHECK_INTERNET,
    payload: data,
  };
};

const saveToken = data => {
  return {
    type: types.SAVE_TOKEN,
    payload: data,
  };
};





