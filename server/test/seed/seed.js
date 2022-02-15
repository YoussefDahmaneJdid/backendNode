
const {ObjectId} = require('mongodb');


const {Employee} = require('./../../models/employees');



  var dateTime = new Date();


  const employees = [{
    _id: new ObjectId(),
    NOM: "juliette",
    PRENOM:'inass',
    DEPARTEMENT:'marketing',
    DATE_ENTREE:dateTime,
    IDENTIFIANT_EMPLOYEE:new ObjectId()

   
  }, {
    _id: new ObjectId(),
    NOM: "julien",
    PRENOM:'ilyass',
    DEPARTEMENT:'marketing',
    DATE_ENTREE:dateTime,
    IDENTIFIANT_EMPLOYEE:new ObjectId()
   
  },
  {
    _id: new ObjectId(),
    NOM: "julien",
    PRENOM:'ilyass',
    DEPARTEMENT:'data',
    DATE_ENTREE:dateTime,
    IDENTIFIANT_EMPLOYEE:new ObjectId()
   
  },
  {
    _id: new ObjectId(),
    NOM: "julien",
    PRENOM:'ilyass',
    DEPARTEMENT:'datas',
    DATE_ENTREE:dateTime,
    IDENTIFIANT_EMPLOYEE:new ObjectId()
   
  }];


  var populateEmployees = (done)=>{
    Employee.remove({}).then(() => {
      return Employee.insertMany(employees);
    }).then(() => done());

  }
  
  
 
  module.exports = {
    
      populateEmployees,
      employees
  }