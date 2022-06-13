import { combineReducers } from 'redux'
import {  addUserReducer, errorReducer, loadingReducer } from '../redux/reducers.js';


const contactListReducer = combineReducers({
	isLoading: loadingReducer,
	error: errorReducer,
	addUser: addUserReducer,
})

export const rootReducer = combineReducers({
	contactsList: contactListReducer,
});