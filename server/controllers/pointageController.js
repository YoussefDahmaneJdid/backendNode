var {Employee} = require('../models/employees');
const {getDateNow,msTotime} = require('../utils/getDateNow');
var {pointageEmployee} = require('../models/pointageEmployee');
const {ObjectId} = require('mongodb');
var moment = require('moment');  

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

    var date;
    date = getDateNow();
    
    var pointageEmployees = new pointageEmployee({
       IDENTIFIANT_EMPLOYEE :id,
       CHECK_IN:date,
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

checkOut:async function(id,comment) {

    
    var date = getDateNow();
    var hours;
    var pointageEmployees
    
   await pointageEmployee.checkOutCheckIn(id).then((employee)=>{
        console.log(employee[0].CHECK_IN);
        const diffTime = Math.abs(date - employee[0].CHECK_IN);
        hours = msTotime(diffTime);
     
     
        });

        pointageEmployees =new pointageEmployee({
            IDENTIFIANT_EMPLOYEE :id,
            CHECK_OUT:date,
            COMMENTAIRE:comment,
            TEMPS_ECOULE:hours
      
         });

    return new Promise(function(resolve,reject){
       
            pointageEmployees.save().then((employee)=>{
                console.log(typeof(hours));
                console.log('rr')
                resolve(employee)
            }).catch((err)=>{
                reject(err)
            });
            });
           

    
},




}