import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_SUCCESS,
  AUTH_ERROR
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAutheticated: null,
  loading: true,
  user: null
};

export default function(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAutheticated: true,
        loading: false,
        user: payload
      };
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAutheticated: false,
        loading: false
      };
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAutheticated: true,
        loading: false
      };
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAutheticated: false,
        loading: false
      };
    default:
      return state;
  }
}
