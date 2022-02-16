var dateTime = new Date();
var moment = require('moment');  





module.exports = {
    msTotime :function  (ms)  {
        let seconds = (ms / 1000).toFixed(1);
        let minutes = (ms / (1000 * 60)).toFixed(1);
        let hours = (ms / (1000 * 60 * 60)).toFixed(1);
        let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
        if (seconds < 60) return seconds + " Sec";
        else if (minutes < 60) return minutes + " Min";
        else if (hours < 24) return hours + " Hrs";
        else return days + " Days"
      },
    dateTime,
    getDateNow:function(){
       var date = new Date();
       return date;
    },
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