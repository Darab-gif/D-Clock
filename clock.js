setInterval(move, 1000);

function move(){
    var d=new Date();

    var h=d.getHours();
    var min=d.getMinutes();
    var sec=d.getSeconds();
    
    var gmt= (h >= 12)? "PM":"AM";

    if(h < 10){
        h="0" + h;
    }

    if(min < 10){
        min= "0" + min;
    }

    if(sec < 10){
        sec="0" + sec;
    }

    document.getElementById("clock").innerHTML=h+":"+min+":"+sec+" "+gmt;
}