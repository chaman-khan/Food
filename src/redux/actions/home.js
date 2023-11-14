import * as types from '../actions/types';
import axios from 'axios';
import {Platform} from 'react-native';
import {baseUrl} from '../../constants/constants';
import {dollarRate, loginSuccess} from './auth';
import ShowSnackBar from '../../components/SnackBar';

export const activeScreen = params => ({
  type: types.ACTIVE_SCREEN,
  payload: params,
});

export const changeAvatar = (data, imageSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}update_manager_avatar.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            dispatch(loginSuccess(response.data.manager));
            ShowSnackBar('Profile picture changed.', 'green');
          } else {
            ShowSnackBar('There is something wrong');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      onErrorNews(err);
    }
  };
};

export const changePassword = (data, passwordSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}update_manager_password.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            ShowSnackBar('Password changed successfully', 'green');
            passwordSuccess(true);
          } else {
            ShowSnackBar('Something went wrong');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      onErrorNews(err);
    }
  };
};

export const fetchHotelDetail = (data, detailSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}fetch_hotel_meta.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          if (response.state === 'OK') {
            detailSuccess(response.data.meta);
            dispatch(homeLoad(false));
            console.log(response.data.meta);
            dispatch(homeScreenData(response.data.meta));
          } else {
            dispatch(homeLoad(false));
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const fetchRooms = (data, roomsSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}fetch_hotel_meta.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            console.log(response);
            roomsSuccess(response.data.meta);
          } else {
            ShowSnackBar('Something went wrong');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const addRooms = (data, roomsSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}create_hotel_room.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            roomsSuccess(true);
          } else {
            ShowSnackBar('Something went Wrong');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const editRooms = (data, roomsSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}update_hotel_room_meta.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(
            'responseeeeeeeeeeeeeeoeuirueiruioeuoieuroieuroie...................//////////',
          );
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            roomsSuccess(true);
          } else {
            ShowSnackBar('Something went Wrong');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const conversations = (data, success) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}fetch_manager_conversations.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            console.log('it is ok');
            success(response.data.meta);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const messages = (data, success) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(
        `${baseUrl}fetch_conversation_between_manager_and_user.php`,
        requestOptions,
      )
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            console.log('it is ok');
            success(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const sendMessag = (data, success) => {
  return async dispatch => {
    try {
      var config = {
        method: 'post',
        url: `${baseUrl}send_manager_user_message.php`,
        headers: {},
        data,
      };

      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}send_manager_user_message.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          if (response.state === 'OK') {
            success(true);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const hotelReservation = (data, success) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}fetch_hotel_reservation_history.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          if (response.state === 'OK') {
            dispatch(homeLoad(false));
            success(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const confirmReservation = (data, success) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}approve_pending_reservation.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          if (response.state === 'OK') {
            dispatch(homeLoad(false));
            success(true);
          } else {
            ShowSnackBar('Something went Wrong');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const rejectReservation = (data, success) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}reject_pending_reservation.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            dispatch(homeLoad(false));
            success(true);
          } else {
            ShowSnackBar('Something went Wrong');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const convert = data => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch('https://admin.raklissd.com/convert.php', requestOptions)
        .then(response => response.json())
        .then(result => {
          dispatch(homeLoad(false));
          if (result.success) {
            console.log(result);
            console.log(Math.round(result.result));
            dispatch(dollarRate(Math.round(result.result)));
            ShowSnackBar('Currency Converted Successfully.', 'green');
          }
        })
        .catch(error => console.log('error', error));
    } catch (err) {
      dispatch(homeLoad(false));
      console.log('err');
      console.log(err);
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
