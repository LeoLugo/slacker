const express = require('express')
const router = express.Router()

router.get('/home', (req, res, next) => {
	res.json({
		message: "reached protected home"
	})
})

module.exports = router