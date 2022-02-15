
const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');
var {app} = require('../server');

const { populateEmployees,employees} = require('./seed/seed');


const { Employee } = require('../models/employees');


beforeEach(populateEmployees);



////////////////////////////////////////////////////////////////////////:

describe('Test POST /creeEmployee',()=>{
    it.only('it should create an employee',(done)=>{
        
        var data = 
        {
         
          nom : "jdid",
          prenom : "youssefssss",
          departement: "data"
    
       }
        request(app)
        .post('/employee/creerEmployee')
        .type('json')
        .send(data)
        .expect(200)
        .expect((res)=>{
           
            expect(res.body.PRENOM).toBe(data.prenom);
         //  expect(res.body).to.have.a.property('NOM');
        }).end(done);
    })


   
});

//////////////////////////////////////////////////:


describe('/getAllEmployees',()=>{
    it.only('should return all employees',(done)=>{

    request(app)
     .get('/employee/getAllEmployees')
     .expect(200)
     .expect((res)=>{
         expect(res.body.length).toBeGreaterThan(0);
         
     }).end(done);
    })

})
////////////////////////////////////////////////////////////////////


describe('updateEmployee/:id',()=>{
 it.only('should update an employee by id',(done)=>{
     var body = {
         "NOM":'ju7a',
         "PRENOM":"akiii"
     };
    
     request(app)
      .patch(`/employee/updateEmployee/${employees[0]._id}`)
      .type('json')
      .send(body)
      .expect(200)
      .expect((res)=>{
          expect(res.body.NOM).toBe('ju7a')
      }).end(done);
 })
})

////////////////////////////////////////////////////////
describe('/getAllEmployeesBydp/:departement',()=>{
    it.only('should return employees by departement',(done)=>{
       
        request(app)
         .get(`/employee/getAllEmployeesBydp/${employees[0].DEPARTEMENT}`)
         .expect(200)
         .expect((res)=>{
             expect(res.body.employee.length).toBe(2);
         }).end(done);
    })
    it.only('should return Empty List if no employees founded in departement',(done)=>{

        request(app)
        .get(`/employee/getAllEmployeesBydp/testes`)
        .expect(200)
        .expect((res)=>{
            expect(res.body.employee.length).toBe(0);
        }).end(done);

    })
   })
//////////////////////////////////////////////////:


