const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// define the home page route
router.get('//:name', (req, res) => {
    console.log(req.params.name);
  res.send('Birds home page')
})
// define the about route
router.get('/about/:name', (req, res) => {
    console.log(req.params.name);
  res.send('About birds')
})

module.exports = router;