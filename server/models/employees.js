var mongoose = require('mongoose');
var moment = require('moment');  
const {getEndDay,getStartDay} = require('../utils/getDateNow');


var EmployeesSchema = mongoose.Schema({
    IDENTIFIANT_EMPLOYEE:{
        type: String,
        required: true,
        trim: true,
        unique:true,
       
      },
      NOM : {
          type:String,
          required : true,
      },
      PRENOM : {
        type:String,
        required : true,
    },
      DEPARTEMENT : {
        type:String,
        required : true,
      }
      ,
      DATE_ENTREE : {
        type:String,
        required : true,
      },
      ACTIF : {
        type:String,
        required : false,
      },
      SALAIRE : {
        type:String,
        required : false,
      },

});

EmployeesSchema.statics.UpdateById= function(id,body){
     var employee = this;
    return employee.findOneAndUpdate({_id: id}, {$set: body}, {new: true}).then((employee) => {
        if(!employee) return Promise.reject();
    
        return employee;

    });
}

EmployeesSchema.statics.getAll= function(){
    var employee = this;
   return employee.find().then((employee) => {
       if(!employee) return Promise.reject();
   
       return employee;

   });
}

EmployeesSchema.statics.getByDepartement= function(departement){
    var employee = this;
   return employee.find({DEPARTEMENT:departement}).then((employee) => {
       if(!employee) return Promise.reject();
   
       return employee;

   });
}

EmployeesSchema.statics.getByDate= function(date){

  

  var start =getStartDay(date);
  var end = getEndDay(date);
  console.log(typeof(start))
  
  var employee = this;
 return employee.find({DATE_ENTREE:{"$gte": start, "$lt": end}}).then((employees) => {
  
     if(!employees) return Promise.reject();
    // console.log(employees);
     return employees;

 });
}








var Employee = mongoose.model('Employee',EmployeesSchema);



module.exports = {
    Employee
}