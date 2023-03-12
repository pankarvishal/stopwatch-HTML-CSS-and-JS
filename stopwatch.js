var HR = 0;
var MIN = 0;
var SEC = 0;
var timer = false;

function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer = false;
    stopwatch();   
}

function reset(){
    HR = 0;
    MIN = 0;
    SEC = 0;
    document.getElementById("HR").innerHTML = "00";
    document.getElementById("MIN").innerHTML = "00";
    document.getElementById("SEC").innerHTML = "00";

}

function stopwatch(){
    if(timer == true){
        SEC = SEC+1;
         
        if(SEC ==60){
            MIN = MIN +1;
            SEC = 00;
        }
        if(MIN == 60){
            HR = HR + 1;
            MIN = 0;
        }
        document.getElementById("HR").innerHTML = HR;
        document.getElementById("MIN").innerHTML = MIN;
        document.getElementById("SEC").innerHTML = SEC;
        setTimeout("stopwatch()" ,1000);
    }
 

}
