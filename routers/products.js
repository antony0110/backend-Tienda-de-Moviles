const router = require('express').Router();
const {Product, category} = require('../models/index')

router.get('/', (req,res)=>{
    Product.findAll({
        include:[category]
    })
    .then(products => res.send(products))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
})
router.post('/',(req,res)=>{
    Product.create({...req.body})
    .then(product => res.status(201).send(product))
    .catch(err=>{
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
   
})



module.exports=router;