const express = require('express')
const app = express()
const http = require('http')
const socketio = require('socket.io')
const server = http.Server(app)
const io = socketio(server)

const config = require('config')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const protectedRoutes = require('./routes/protectedRoutes')
const openRoutes = require('./routes/openRoutes')
const jwt = require('express-jwt')


app.use(bodyParser.json())

app.get('/', (req, res, next) => {
	res.send('Hello World!')
})

app.use('/api', authRoutes)
app.use('/api', openRoutes)
app.use('/api', jwt({secret: config.get('jwt-secret')}), protectedRoutes)

server.listen(config.get('port'))





io.on('connection', (socket) => {
	socket.on('message', data => {
		io.emit('message', data)
	})
})





















