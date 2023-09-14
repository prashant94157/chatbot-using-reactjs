import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userAgeReducers,
  userNameReducers,
  userSlotReducers,
} from './reducers/userDataReducers';

const reducer = combineReducers({
  userName: userNameReducers,
  userAge: userAgeReducers,
  userSlot: userSlotReducers,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
