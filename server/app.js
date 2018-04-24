const express = require('express')
const app = express()
const http = require('http')
const socketio = require('socket.io')
const server = http.Server(app)
const io = socketio(server)


server.listen(3001)



io.on('connection', (socket) => {
	socket.on('message', data => {
		io.emit('message', data)
	})
})





















