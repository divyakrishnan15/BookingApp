const router = require('express').Router()

router.get('/',(req,res)=>{
    res.render('flights')
    // res.sendFile(path.join(__dirname,'/../views/layouts/index.html'))
})

module.exports=router