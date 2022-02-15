
var moment = require('moment');  
var expect = require('chai').expect;
const {getEndDay,getStartDay} = require('../utils/getDateNow');
describe('testing moment function',()=>{

   it.only('should return a moment object whit the start of day',()=>{
           expect(moment.isMoment(getStartDay('2022-02-02'))).to.be.true;
   })
   it.only('should return  a moment object whitthe end of day',()=>{
    expect(moment.isMoment(getEndDay('2022-02-02'))).to.be.true;
})




 })