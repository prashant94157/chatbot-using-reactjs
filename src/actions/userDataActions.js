import { USER_DATA } from '../constants';

const saveUserData = (date, time) => (dispatch) => {
  dispatch({
    type: USER_DATA,
    payload: { date, time },
  });
};

export { saveUserData };
