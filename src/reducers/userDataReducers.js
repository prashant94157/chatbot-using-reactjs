import { USER_DATA } from '../constants';

const userDataReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_DATA:
      return payload;

    default:
      return state;
  }
};

export { userDataReducers };
