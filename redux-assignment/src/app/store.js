import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
},composeWithDevTools(applyMiddleware(thunk)));
