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
        
       
      }

});








var pointageEmployee = mongoose.model('pointageEmployees',pointageEmployeesSchema);



module.exports = {
    pointageEmployee
}