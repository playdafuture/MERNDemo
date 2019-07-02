import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT, REMOVE_ALL_BUT_ALERT } from './types';

/**
 * The setAlert method being called by other components such as auth/Register.js
 * This will insert an alert message into the page
 * @param {*} msg           The content/body of the message
 * @param {*} alertType     danger, success, e.t.c.
 * @param {*} timeout       (optional) dismiss the alert in how many ms, otherwise stay indefinately
 */
export const setAlert = (msg, alertType, timeout) => dispatch => {
  const id = uuid.v4();
  console.log('Dispatching set alert ' + id);
  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
      id
    }
  });
  dispatch({ type: REMOVE_ALL_BUT_ALERT, payload: id }); //enforce this is the only alert
  if (timeout && timeout > 0) {
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  }
};
