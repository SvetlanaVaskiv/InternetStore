import { FILL_CONTACTS, POST_USER, SET_ERROR, START_LOADING, STOP_LOADING } from "./types"

export const fillContacts = (data) => {
	return {
		type: FILL_CONTACTS,
		payload: data
	}

}
export const addNewUser = (data) => {
	return {
		type: POST_USER,
		payload: data
	}
}
export const setErrorMessage = () => ({
	type: SET_ERROR,
	payload: "NOT FOUND"
})
export const startLoading = {
	type: START_LOADING,
}
export const stopLoading = {
	type: STOP_LOADING,
}