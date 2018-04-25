const express = require('express')
const router = express.Router()

router.get('/login', (req, res, next) => {
	res.json({
		message: "reached open login"
	})
})

module.exports = router