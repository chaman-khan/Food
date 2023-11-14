import {useTranslation} from 'react-i18next';
import * as types from '../actions/types';
const initialState = {
  homeData: [],
  homeLoading: false,
  dollar: 1,
  currency: 'USD',
  images: [],
  roomData: [
    {
      key: 1,
      icon: 'tv',
      type: 'font-awesome',
      name: 'flatscreen',
      switch: false,
    },
    {
      key: 1,
      icon: 'city',
      type: 'font-awesome-5',
      name: 'City-View',
      switch: false,
    },
    {
      key: 1,
      icon: 'bath',
      type: 'font-awesome',
      name: 'Bathtub',
      switch: false,
    },
    {
      key: 1,
      icon: 'wifi',
      type: 'font-awesome',
      name: 'Wifi',
      switch: false,
    },
    {
      key: 1,
      icon: 'dumbbell',
      type: 'font-awesome-5',
      name: 'Gym',
      switch: false,
    },
    {
      key: 1,
      icon: 'food-bank',
      type: 'material-icons',
      name: 'Breakfast',
      switch: false,
    },
    {
      key: 1,
      icon: 'kitchen',
      type: 'material-icons',
      name: 'Kitchen',
      switch: false,
    },
    {
      key: 1,
      icon: 'umbrella-beach',
      type: 'font-awesome-5',
      name: 'Beach View',
      switch: false,
    },
  ],
  default: [
    {
      key: 1,
      icon: 'tv',
      type: 'font-awesome',
      name: 'Flat-Screen',
      switch: false,
    },
    {
      key: 1,
      icon: 'city',
      type: 'font-awesome-5',
      name: 'City-View',
      switch: false,
    },
    {
      key: 1,
      icon: 'bath',
      type: 'font-awesome',
      name: 'Bathtub',
      switch: false,
    },
    {
      key: 1,
      icon: 'wifi',
      type: 'font-awesome',
      name: 'Wifi',
      switch: false,
    },
    {
      key: 1,
      icon: 'dumbbell',
      type: 'font-awesome-5',
      name: 'Gym',
      switch: false,
    },
    {
      key: 1,
      icon: 'food-bank',
      type: 'material-icons',
      name: 'Breakfast',
      switch: false,
    },
    {
      key: 1,
      icon: 'kitchen',
      type: 'material-icons',
      name: 'Kitchen',
      switch: false,
    },
    {
      key: 1,
      icon: 'umbrella-beach',
      type: 'font-awesome-5',
      name: 'Beach View',
      switch: false,
    },
  ],
  roomDataAra: [
    {
      key: 1,
      icon: 'tv',
      type: 'font-awesome',
      name: 'شاشة مسطحة',
      switch: false,
    },

    {
      key: 1,
      icon: 'city',
      type: 'font-awesome-5',
      name: 'اطلالة المدينة',
      switch: false,
    },
    {
      key: 1,
      icon: 'bath',
      type: 'font-awesome',
      name: 'حوض الاستحمام',
      switch: false,
    },
    {
      key: 1,
      icon: 'wifi',
      type: 'font-awesome',
      name: 'واي فاي',
      switch: false,
    },
    {
      key: 1,
      icon: 'dumbbell',
      type: 'font-awesome-5',
      name: 'نادي رياضي',
      switch: false,
    },
    {
      key: 1,
      icon: 'food-bank',
      type: 'material-icons',
      name: 'إفطار',
      switch: false,
    },
    {
      key: 1,
      icon: 'kitchen',
      type: 'material-icons',
      name: 'مطبخ',
      switch: false,
    },
    {
      key: 1,
      icon: 'umbrella-beach',
      type: 'font-awesome-5',
      name: 'إطلالة على الشاطئ',
      switch: false,
    },
  ],
  defaultAra: [
    {
      key: 1,
      icon: 'tv',
      type: 'font-awesome',
      name: 'شاشة مسطحة',
      switch: false,
    },

    {
      key: 1,
      icon: 'city',
      type: 'font-awesome-5',
      name: 'اطلالة المدينة',
      switch: false,
    },
    {
      key: 1,
      icon: 'bath',
      type: 'font-awesome',
      name: 'حوض الاستحمام',
      switch: false,
    },
    {
      key: 1,
      icon: 'wifi',
      type: 'font-awesome',
      name: 'واي فاي',
      switch: false,
    },
    {
      key: 1,
      icon: 'dumbbell',
      type: 'font-awesome-5',
      name: 'نادي رياضي',
      switch: false,
    },
    {
      key: 1,
      icon: 'food-bank',
      type: 'material-icons',
      name: 'إفطار',
      switch: false,
    },
    {
      key: 1,
      icon: 'kitchen',
      type: 'material-icons',
      name: 'مطبخ',
      switch: false,
    },
    {
      key: 1,
      icon: 'umbrella-beach',
      type: 'font-awesome-5',
      name: 'إطلالة على الشاطئ',
      switch: false,
    },
  ],
  rooms: [],
  conversation: [],
  languages: 'ara',
};
export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HOME_LOADING: {
      return {
        ...state,
        homeLoading: action.payload,
      };
    }
    case types.HOME_DATA: {
      return {
        ...state,
        homeData: action.payload,
      };
    }
    case types.ADD_IMAGES: {
      return {
        ...state,
        images: action.payload,
      };
    }
    case types.STORE_CONVERSATION: {
      return {
        ...state,
        conversation: action.payload,
      };
    }
    case types.EDIT_ROOM_DATA: {
      return {
        ...state,
        roomData: action.payload,
      };
    }
    case types.EDIT_ROOM_DATA_ARA: {
      return {
        ...state,
        roomDataAra: action.payload,
      };
    }
    case types.ROOMS_DATA: {
      return {
        ...state,
        rooms: action.payload,
      };
    }
    case types.RESET: {
      return {
        ...state,
        roomData: state.default,
        images: [],
      };
    }
    case types.SET_LANGUAGE: {
      return {
        ...state,
        languages: action.payload,
      };
    }
    case types.DOLLAR_RATE: {
      return {
        ...state,
        dollar: action.payload,
        currency: 'SDG',
      };
    }
    case types.CHNAGE_CURRENCY: {
      return {
        ...state,
        currency: action.payload,
      };
    }

    default:
      return state;
  }
};
