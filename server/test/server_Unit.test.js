var moment = require('moment');  

const expects = require('expect');
var expect = require('chai').expect;
const request = require('supertest');

var {app} = require('../server');
const assert = require('assert');
var sinon = require('sinon');

const { Employee } = require('../models/employees');
const employeeController = require('../controllers/employeeController');




 

describe('Test Unit for models',()=>{
  var stub 
  it('should have a property schema for employee',()=>{
      //  expect(Employee).to--------------------HaveProperty('EmployeesSchema');
  })

   it.only('Spy getAll methods from models',()=>{
       sinon.spy(Employee,'getAll');
       Employee.getAll();
        expect(Employee.getAll.calledOnce).to.be.true;
     })

     it.only('Spy UpdateById methods from models',()=>{
      sinon.spy(Employee,'UpdateById');
      Employee.UpdateById();
       expect(Employee.getAll.calledOnce).to.be.true;
    })
    it.only('Spy getByDate methods from models',()=>{
      sinon.spy(Employee,'getByDate');
      Employee.getByDate();
       expect(Employee.getByDate.calledOnce).to.be.true;
    })
    it.only('Spy getByDepartement methods from models',()=>{
      sinon.spy(Employee,'getByDepartement');
      Employee.getByDepartement();
       expect(Employee.getByDepartement.calledOnce).to.be.true;
    })
 })



 describe('unit test controller Methods',()=>{

  before(() => {
    // setup stub code here
     
  });
  beforeEach(function() {
    // Sinon wrappers must be restored before or after a test case.
    // Hooks makes it easier implement
    sinon.restore();
    console.log("======= Before every test case inside this test suit");
  });

  it.only('Spy getAll methods from controllers',()=>{
    sinon.spy(employeeController,'findAll');
    employeeController.findAll();
     expect(employeeController.findAll.calledOnce).to.be.true;
  })
  it.only('Spy CreateOne methods from controllers',()=>{
    sinon.spy(employeeController,'createOne');
    employeeController.createOne({});
     expect(employeeController.createOne.calledOnce).to.be.true;
  })
  it.only('Spy updateEmployeeById methods from controllers',()=>{
    sinon.spy(employeeController,'updateEmployeeById');
    employeeController.updateEmployeeById({});
     expect(employeeController.updateEmployeeById.calledOnce).to.be.true;
  })
  it.only('Spy findEmployeeByDp methods from controllers',()=>{
    sinon.spy(employeeController,'findEmployeeByDp');
    employeeController.findEmployeeByDp({});
     expect(employeeController.findEmployeeByDp.calledOnce).to.be.true;
  })

  it.only('should check if return an array of employee',(done)=>{
        employeeController.findAll().then((result)=>{
          expect(result.length).to.be.equal(4);
          
          done();
        }).catch(done);
   
   })
  
   it.only('should stub response for findAll controller',()=>{
    stub = sinon.stub(employeeController, "findAll");
    stub.resolves({response:"ok"});
    employeeController.findAll().then(function(data){
     expect(data.response).to.equal("ok");
     done();
    },function(err){
     done("should NEVER get here");
    });

   })

  



   it.only('stub response for createOne controller',()=>{
    stub = sinon.stub(employeeController, "createOne");
    stub.resolves({response:"ok"});
    stub.withArgs({"NOM":"Youssef"});
    employeeController.createOne().then(function(data){
     expect(data.response).to.equal("ok");
     done();
    },function(err){
     done("should NEVER get here");
    });

   })
   it('stub response for createOne controller Error',()=>{
    const mError = new Error('network');
    sinon.stub(employeeController, 'createOne').rejects(mError);
    const mReq = { body: {} };
    const mReply = { code: sinon.stub().returnsThis(), send: sinon.stub() };
    employeeController.createOne(mReq, mReply);
   
    sinon.assert.calledWith(mReply.send, mError);



   })

   it.only('stub response for updateEmployeeById controller',()=>{
    stub = sinon.stub(employeeController, "updateEmployeeById");
    stub.resolves({response:"ok"});
    stub.withArgs({"id":"xxxx"});
    employeeController.updateEmployeeById().then(function(data){
     expect(data.response).to.equal("ok");
     done();
    },function(err){
     done("should NEVER get here");
    });

   })
   it.only('stub response for findEmployeeByDp controller',()=>{
    stub = sinon.stub(employeeController, "findEmployeeByDp");
    stub.resolves({response:"ok"});
    stub.withArgs({"departement":"xxxx"});
    employeeController.findEmployeeByDp().then(function(data){
     expect(data.response).to.equal("ok");
     done();
    },function(err){
     done("should NEVER get here");
    });

   })
  
 })


 
 