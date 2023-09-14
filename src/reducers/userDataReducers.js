import { USER_NAME, USER_AGE, USER_SLOT } from '../constants';

const userNameReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_NAME:
      return payload;

    default:
      return state;
  }
};

const userAgeReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_AGE:
      return payload;

    default:
      return state;
  }
};

const userSlotReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_SLOT:
      return payload;

    default:
      return state;
  }
};

export { userAgeReducers, userNameReducers, userSlotReducers };
