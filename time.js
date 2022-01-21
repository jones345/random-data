

var serverTime = setInterval(function() {
    var today = new Date();
    var day = today.getDay();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var time = hour + ":" + min + ":" + sec;
    
    if(day === 0 && hour === 15 && min === 44 && sec === 0) {
        console.log("It's time to serve!");
        return true;
        
    }
    else {
        console.log('Not Sunday and not 08:30:00 ');
        return false;
    }

}, 1000);

serverTime;