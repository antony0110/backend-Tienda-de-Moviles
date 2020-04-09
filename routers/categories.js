const router = require('express').Router();
const {category,Product} = require('../models/index')

router.get('/', (req,res)=>{
    category.findAll({
        include:[Product]
    })
    .then(categories => res.send(categories))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
})
router.post('/',(req,res)=>{
    category.create({...req.body})
    .then(category => res.status(201).send(category))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
   
})
router.put('/:id',(req,res)=>{
    category.update({...req.body})
    .then(category => res.status(201).send(category))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
   
})
//router.delete('/:id',(req,res)=>{
   // category.destroy({...req.body})
   // .then(category => res.status(201).send(category))
  //  .catch(err=>{
   //     console.log(err)
 //       res.status(500).send({message:'Ha habido un problema al cargar los productos'})
///    })
   
//})
router.delete('/:id', (req, res, next) =>{
    let { id } = req.params; category.destroy(
    {where:{id} }) .then(category=>{ res.statusCode = 201; res.json(category);
    }).catch(err =>{ res.statusCode = 500; res.json(`'error': ${err}`);
    })
    });


module.exports=router;