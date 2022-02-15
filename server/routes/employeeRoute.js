var express = require('express');
var router = express.Router();
const _ = require('lodash');
const employeeController = require('../controllers/employeeController');
const pointageController = require('../controllers/pointageController');
/* GET users listing. */
router.post('/creerEmployee',(req,res)=>{

    var reqB = req.body;
    
    employeeController.createOne(reqB).then((employeeCreated)=>{
       res.status(200).send(employeeCreated);
     }).catch((err)=>{
        res.status(400).send(err);
     })
   
   });


   router.patch('/updateEmployee/:id',(req,res)=>{

    var id  = req.params.id;
    var body = _.pick(req.body,['NOM','PRENOM','DEPARTEMENT']);
    
    employeeController.updateEmployeeById(id,body).then((employee)=>{
       res.status(200).send(employee)
    }).catch((err)=>{
       res.status(400).send(err);
    })
  });
  
  
  ////////////////////////////// RETOURNER TOUTE LA LSITE DES EMPLOYEEE
  
  
  router.get('/getAllEmployees',(req,res)=>{
  
     employeeController.findAll().then((employee)=>{
        res.send(employee);
     }).catch((err)=>{
        res.status(400).send(err);
     })
    
   
  });
  
  ////////////////////////////// RETOURNER LES EMPLOYEE PAR NOM DE DEPARTEMENT
  
  router.get('/getAllEmployeesBydp/:departement',(req,res)=>{
     departement = req.params.departement;
    
    employeeController.findEmployeeByDp(departement).then((employee)=>{
           res.status(200).send({employee});
     }).catch((err)=>{
        res.status(400).send(err);
     })
    });

    
  router.get('/getByDate/:date',(req,res)=>{
   
  
    pointageController.getEmployeesByDateCreation(req.params.date).then((employee)=>{
          res.status(200).send(employee);
    }).catch((err)=>{
       res.status(400).send(err);
    })
   });
 
module.exports = router;
