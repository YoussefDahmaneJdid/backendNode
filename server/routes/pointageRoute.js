var express = require('express');
var router = express.Router();
const pointageController = require('../controllers/pointageController');
const _ = require('lodash');

    
router.get('/getByDate/:date',(req,res)=>{
   
  pointageController.getEmployeesByDateCreation(req.params.date).then((employee)=>{
          res.status(200).send(employee);
    }).catch((err)=>{
       res.status(400).send(err);
    })
});

router.post('/checkin/:id',(req,res)=>{
    var comment = _.pick(req.body,['commentaire']);
    
  
    pointageController.checkIn(req.params.id,comment.commentaire.toString()).then((employee)=>{
            res.status(200).send(employee);
      }).catch((err)=>{
         res.status(400).send(err);
      })
});

router.post('/checkout/:id',(req,res)=>{
    var comment = _.pick(req.body,['commentaire']);
    
  
    pointageController.checkOut(req.params.id,comment.commentaire.toString()).then((employee)=>{
            res.status(200).send(employee);
      }).catch((err)=>{
         res.status(400).send(err);
      })
});



 
module.exports = router;
