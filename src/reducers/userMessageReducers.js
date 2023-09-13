import { USER_MESSAGE } from '../constants';

const userMessageReducers = (state = { messages: [] }, { type, payload }) => {
  switch (type) {
    case USER_MESSAGE:
      return { messages: [...state.messages, payload] };

    default:
      return state;
  }
};

export { userMessageReducers };
