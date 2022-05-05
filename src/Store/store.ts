import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = 
{

}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, )

let persistor = persistStore(store)

export {store, persistor}
