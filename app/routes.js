const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line
const { readdirSync, statSync } = require('fs')
const { join, resolve } = require('path')

readdirSync(resolve(__dirname, 'views'))
  .filter(f => statSync(join(resolve(__dirname, 'views'), f)).isDirectory() && f.match(/^v/))
  .forEach(d => {
    require(`./views/${d}/routes`)(router, d);
  });


module.exports = router
