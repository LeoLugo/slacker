const initialState = {
	messages: [],
	isAuthenticated: false
}





export default function(state = initialState, action) {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return {...state, messages: [action.payload, ...state.messages]}
		case 'LOGIN_SUCCESS':
			return {...state, isAuthenticated: true}
		case 'LOGOUT':
			return {...state, isAuthenticated: false}
		default:
			return state
	}
}