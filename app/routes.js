const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line
require('./views/v1/routes')(router, 'v1')

require('./views/v2/routes')(router, 'v2')

module.exports = router
