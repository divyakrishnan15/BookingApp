const router = require('express').Router()

router.get('/',(req,res)=>{
    res.render('hotel')
    // res.sendFile(path.join(__dirname,'/../views/layouts/index.html'))
})

module.exports=router