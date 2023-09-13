import { USER_MESSAGE } from '../constants';

const saveUserMessage = (message) => (dispatch) => {
  dispatch({
    type: USER_MESSAGE,
    payload: message,
  });
};

export { saveUserMessage };
