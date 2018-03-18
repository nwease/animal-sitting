const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()

router.get('/', function(req, res) {
  res.json('Auth Route')
})

router.post('/register', function(req, res) {
  turbo
    .createUser(req.body)
    .then(data => {
      res.json({
        confirmation: 'success',
        data: data
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      })
    })
})

module.exports = router
