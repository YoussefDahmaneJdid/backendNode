
var {Employee} = require('../models/employees');

module.exports = class testController {
    constructor() {
        console.log("initiate");
      }
    static async findAll() {
        return new Promise(function(resolve,reject){
       /*     Employee.getAll().then((employee)=>{
                resolve(employee);
        }).catch((err)=>{
          reject(err);
        })*/
         })
    }
  };