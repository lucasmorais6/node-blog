const router= require('express').Router() 

router.use('/', require('./postagens'))

module.exports = router