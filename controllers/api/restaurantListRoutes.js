const {restaurantList} = require('../../models');
const router = require('express').Router()

router.get('/',(req,res)=>{
    restaurantList.findAll({
      attributes:["id","restaurant_name","filename","reviews","description"]
  }).then((restaurantListData)=>{
      if(!restaurantListData){
          res.status(404).json({message:'No restaurant details data found'})
          return
      }
      res.json(restaurantListData)
      

  }).catch((err)=>{
      res.status(500).json(err)
  })
})


router.get('/:id',(req,res)=>{
    restaurantList.findOne({
    attributes:["id","restaurant_name","filename","reviews","description"],
    where:{
      id:req.params.id
    }
}).then((restaurantListData)=>{
    if(!restaurantListData){
        res.status(404).json({message:'No restaurant details data found'})
        return
    }
    res.json(restaurantListData)
    
}).catch((err)=>{
    res.status(500).json(err)
})
})


router.put('/:id',(req,res)=>{
    restaurantList.update(req.body,{
      where:{
          id:req.params.id
      }
}).then((restaurantListData)=>{
    if(!restaurantListData){
        res.status(404).json({message:'No restaurant data found'})
        return
    }
    res.json(restaurantListData)
    
}).catch((err)=>{
    res.status(500).json(err)
})
})

module.exports = router