import axios from 'axios';
import * as types from './types';
import {apiKey, baseUrl} from '../../constants/constants';
import ShowSnackBar from '../../components/SnackBar';
import {fetchHotelDetail, homeLoad} from './home';

export const registerManager = (data, handleSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}register_manager.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log('response.data.data');
          console.log(response);
          dispatch(authLoad(false));
          if (response.state === 'OK') {
            dispatch(signupSuccess(response.data.manager));
            handleSuccess(true);
          } else {
            ShowSnackBar('There is something wrong');
          }
        })
        .catch(function (error) {
          dispatch(authLoad(false));
          console.log(error);
        });
    } catch (err) {
      dispatch(authLoad(false));
      console.log(err);
    }
  };
};

export const loginManager = (data, successLogin) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}login_manager.php`, requestOptions)
        .then(response => response.json())
        .then(response => {
          console.log('..........................');
          console.log(response);
          if (response.state === 'OK') {
            successLogin(response.data.manager);
            dispatch(loginSuccess(response.data.manager));
          } else {
            dispatch(authLoad(false));
            ShowSnackBar('There is something wrong');
          }
        })
        .catch(error => console.log('error', error));

      // axios(config)
      //   .then(function (response) {
      //     dispatch(authLoad(false));
      //     console.log(response.data);
      //     if (response.data.state === 'OK') {
      //       successLogin(true);
      //       dispatch(loginSuccess(response.data.data.manager));
      //     } else {
      //       ShowSnackBar('There is something wrong');
      //     }
      //   })
      //   .catch(function (error) {
      //     dispatch(authLoad(false));
      //     console.log(error);
      //   });
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

export const updateCallAPIstate = data => {
  return {
    type: types.CHANGE_CALL,
    payload: data,
  };
};

export const dollarRate = data => {
  return {
    type: types.DOLLAR_RATE,
    payload: data,
  };
};
