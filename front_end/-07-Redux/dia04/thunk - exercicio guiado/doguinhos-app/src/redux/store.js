import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import dogReducer from './reducers/reducer';
import thunk from 'redux-thunk'

export const store = createStore(dogReducer, composeWithDevTools(applyMiddleware(thunk)));

