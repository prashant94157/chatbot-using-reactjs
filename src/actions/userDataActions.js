import { USER_AGE, USER_NAME, USER_SLOT } from '../constants';

const saveSlotDetails = (date, time) => (dispatch) => {
  dispatch({
    type: USER_SLOT,
    payload: { date, time },
  });
};

const saveNameDetail = (name) => (dispatch) => {
  dispatch({
    type: USER_NAME,
    payload: { name },
  });
};

const saveAgeDetail = (age) => (dispatch) => {
  dispatch({
    type: USER_AGE,
    payload: { age },
  });
};

export { saveSlotDetails, saveAgeDetail, saveNameDetail };
