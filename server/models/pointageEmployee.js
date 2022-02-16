var mongoose = require('mongoose');



var pointageEmployeesSchema = mongoose.Schema({
    IDENTIFIANT_EMPLOYEE:{
        type: String,
        required: true,
        
        
       
      },
      CHECK_IN : {
          type:Date,
          required : false,
      },
      CHECK_OUT : {
        type:Date,
        required : false,
    },
    COMMENTAIRE:{
        type: String,
        
       
      },
      TEMPS_ECOULE:{
          type : String
      },



});



pointageEmployeesSchema.statics.checkOutCheckIn= async function (id) {
    var employee = this;
   return employee.find({IDENTIFIANT_EMPLOYEE:id}).sort({"CHECK_IN": -1}).limit(1).then((employee) => {
       if(!employee) return Promise.reject();
   
       return employee;

   });
}





var pointageEmployee = mongoose.model('pointageEmployees',pointageEmployeesSchema);



module.exports = {
    pointageEmployee
}