var {Employee} = require('../models/employees');
const {dateTime} = require('../utils/getDateNow');

const {ObjectId} = require('mongodb');
module.exports =  {


findAll :function() {
     return new Promise(function(resolve,reject){
        Employee.getAll().then((employee)=>{
            resolve(employee);
    }).catch((err)=>{
      reject(err);
    })
     })

},

createOne : function(reqBody){
    const employeeID = new ObjectId();
    
    var employee = new Employee({
       IDENTIFIANT_EMPLOYEE :employeeID,
       NOM : reqBody.nom,
       PRENOM : reqBody.prenom,
       DATE_ENTREE :dateTime,
       DEPARTEMENT: reqBody.departement
 
    });

    return new Promise(function(resolve,reject){
        employee.save().then((employee)=>{
            resolve(employee);
    }).catch((err)=>{
      reject(err);
    })
     })
},
updateEmployeeById:function(id,body){
         return new Promise(function(resolve,reject){
            Employee.UpdateById(id,body).then((employee)=>{
                resolve(employee)
             }).catch((err)=>{
                reject(err);
             })
         });


},
findEmployeeByDp:function(departement){

    return new Promise(function(resolve,reject){
        Employee.getByDepartement(departement).then((employee)=>{
            resolve(employee)
         }).catch((err)=>{
            reject(err);
         })
     });

}






}