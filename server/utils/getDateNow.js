var dateTime = new Date();
var moment = require('moment');  





module.exports = {
    dateTime,
    getStartDay: function(date){
        var receivedDate = new Date(date);
        var start = moment(receivedDate).startOf('day');
        return start;
        },
    getEndDay:function(date){
        var end = moment(date).endOf('day');
        
        return end;
    }
    
}