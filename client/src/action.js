import io from 'socket.io-client'
import store from './store'
import api from './lib/axiosapi'

api.new('/api')

const socket = io.connect('http://localhost:3001')


export function sendMessage(message) {
	socket.emit('message', {
		message: message
	})
}

socket.on('message', data => {
	addMessage(data)
})

export function addMessage(message) {
	store.dispatch({
		type: 'ADD_MESSAGE',
		payload: message
	})
}

export function logout() {
	api.logout()
	store.dispatch({
		type: 'LOGOUT'
	})
}


export function register(username, password, fn) {
	api.register(username, password).then(() => { 
		store.dispatch({
			type: 'LOGIN_SUCCESS'
		})
		fn('/home')
	})
}


export function login(username, password, fn) {
	api.login(username, password).then(() => {
		store.dispatch({
			type: 'LOGIN_SUCCESS'
		})
		fn('/home')
	}).catch(err => {
		console.log(err)
	})
}
