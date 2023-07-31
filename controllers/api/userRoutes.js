const {User} = require('../../models');
const router = require('express').Router()

router.get('/',(req,res)=>{
  User.findAll({
      attributes:{exclude:['password']}
  }).then((userData)=>{
      if(!userData){
          res.status(404).json({message:'No User data found'})
          return
      }
      res.json(userData)

  }).catch((err)=>{
      res.status(500).json(err)
  })
})


//GET ONE
router.get('/:id',(req,res)=>{
    User.findOne({
        attributes:{exclude:['password']},
        where:{
            id:req.params.id
        },
    }).then((userData)=>{
        if(!userData){
            res.status(404).json({message:`No USER data found with id = ${req.params.id}`})
            return
        }
        res.json(userData)
    }).catch((err)=>{
        res.status(500).json(err)
    })
})



//UPDATE USER data------
router.put('/:id',(req,res)=>{
    User.update(req.body,{
        where:{
            id:req.params.id
        },
        attributes:{exclude:['password']},
    }).then((userData)=>{
        if(!userData){
            res.status(404).json({message:`No USER data found with id = ${req.params.id}`})
            return
        }
        res.json({message:`USER data UPDATED with id = ${req.params.id}`})
    }).catch((err)=>{
        res.status(500).json(err)
    })
})



//DELETE
router.delete('/:id',(req,res)=>{
    User.destroy({
        where:{
            id:req.params.id
        },
    }).then((userData)=>{
      if(!userData){
      res.status(404).json({message:`No category was found with the ${req.params.id}`});
    return
    }
    res.json({message:`Successfully DELETED Category with id= ${req.params.id}`})
  }).catch((err)=>{
    console.log(err)
    res.status(500).json(err)
  })
});


router.post('/',(req,res)=>{
    User.create({
        email:req.body.email,
        password:req.body.password
    }).then((userLoginData)=>{

        req.session.user_session_data={
            // username:userLoginData.user_name,
            email:userLoginData.email,
            password:userLoginData.password,
            user_id:userLoginData.id
        }
        res.json(userLoginData)
    }).catch((err)=>{
        res.json(err)
    })
})


router.post('/login', (req, res) => {
  
    User.findOne({ 
      where: { email: req.body.email } 
    }).then((loginData)=>{
      if (!loginData) {
        res.status(400).json({ message: 'Incorrect email or password, please try again /or SIGN UP' });
        return;
      }
  
      const validPassword = loginData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      console.log("loginData",loginData)
      // req.session.user_session_data = {
      //   email: loginData.email,
      //   password: loginData.password,
      //   user_id:loginData.id
      // }

      req.session.user_session_data={
        // username:userLoginData.user_name,
        email:loginData.email,
        password:loginData.password,
        user_id:loginData.id
      }

      console.log("session",req.session.user_session_data)
        
        res.json({ user: loginData, message: 'You are now logged in!' });
      
  
    }).catch((err)=> {
    res.status(400).json(err);
  })
  })


  

router.post('/logout', (req, res) => {
    if (req.session.user_session_data) {
      delete req.session.user_session_data;
      res.json("logout SUCCESS")
    } else {
      res.status(404).end();
    }
  });

module.exports = router
