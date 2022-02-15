var {Employee} = require('../models/employees');
const {dateTime} = require('../utils/getDateNow');
var {pointageEmployee} = require('../models/pointageEmployee');
const {ObjectId} = require('mongodb');
module.exports =  {

getEmployeesByDateCreation:function(date){

    return new Promise(function(resolve,reject){
        Employee.getByDate(date).then((employee)=>{
            resolve(employee)
         }).catch((err)=>{
            reject(err);
         })
     });

},

checkIn:function(id,comment){

    
    
    var pointageEmployees = new pointageEmployee({
       IDENTIFIANT_EMPLOYEE :id,
       CHECK_IN:dateTime,
       COMMENTAIRE:comment
 
    });

    return new Promise(function(resolve,reject){
        pointageEmployees.save().then((employee)=>{
            resolve(employee);
    }).catch((err)=>{
      reject(err);
    })
     })
    
},

checkOut:function(id,comment){

    
    
    var pointageEmployees = new pointageEmployee({
       IDENTIFIANT_EMPLOYEE :id,
       CHECK_OUT:dateTime,
       COMMENTAIRE:comment
 
    });

    return new Promise(function(resolve,reject){
        pointageEmployees.save().then((employee)=>{
            resolve(employee);
    }).catch((err)=>{
      reject(err);
    })
     })
    
}

}