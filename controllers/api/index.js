const router = require('express').Router()
const flights=require('./flights')

router.use('/flights',flights)



module.exports=router
