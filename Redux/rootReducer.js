import { combineReducers } from 'redux'

import countReducer from './reducer'

import userReducer from './UserRedux/UserReducer'

import AsyncStorage from '@react-native-async-storage/async-storage';
import {  persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
    //count: countReducer,
    user: persistReducer(persistConfig,userReducer)
    // user: userReducer
})

export default rootReducer